const https = require("https");
const getTheme = require("./theme");

async function scrapeThemeAvailableKeys() {

    const ignore_keys = ["workbench.colorCustomizations", "editor.tokenColorCustomizations"];

    const data = await new Promise((resolve, reject) => {
        https.get("https://code.visualstudio.com/api/references/theme-color", (res) => {
            let body = "";
            res.setEncoding("utf8");
            res.on("data", (data) => (body += data));
            res.on("end", () => resolve(body));
            res.on("error", reject);
        });
    });

    const matches = data.match(new RegExp("<code>.+?</code>", "g"));

    if (!matches) {
        throw new Error("Couldn't find any matches with <code>...</code>, maybe docs have changed?");
    }

    return matches
        .map((key) => key.replace("<code>", "").replace("</code>", ""))
        .filter((key) => !/ /.test(key)) // Remove if contains spaces
        .filter((key) => !/#.../.test(key)) // Remove if is a hex color
        .filter((key) => !/&quot;/.test(key)) // Remove if contains quotes
        .filter((key) => key.length > 4) // Remove if it's very small
        .filter((key) => !ignore_keys.includes(key)) // Remove if its in the blacklist
}


(async () => {

    const documentationKeys = await scrapeThemeAvailableKeys();
    const themeKeys = Object.keys(getTheme({theme: "lint", name: "Linting Test"}).colors);

    console.log("Unsupported keys:");
    for (const key of themeKeys.filter((x) => !documentationKeys.includes(x))) {
        console.warn(`"${key}"`);
    }

    console.log("Missing keys:")
    for (const key of documentationKeys.filter((x) => !themeKeys.includes(x))) {
        console.warn(`"${key}"`);
    }
})().catch(console.error);
