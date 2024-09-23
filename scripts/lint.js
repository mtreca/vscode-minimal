const fs = require("fs");
const path = require("path");
const https = require("https");
const generate = require("./generate");

const NOT_THEME_KEYS = ["workbench.colorCustomizations", "editor.tokenColorCustomizations"];

async function fetchVSCodeDocs() {
    const URL = "https://code.visualstudio.com/api/references/theme-color";
    return await new Promise((resolve, reject) => {
        https.get(URL, (res) => {
            let body = "";
            res.setEncoding("utf8");
            res.on("data", (data) => (body += data));
            res.on("end", () => resolve(body));
            res.on("error", reject);
        });
    });
}

async function lintTheme() {
    const possibleKeys = await scrapeThemeAvailableKeys();

    const mapping = await generate.getTheme("minimal-black", false);
    const themeKeys = Object.keys(mapping.colors);

    for (const key of themeKeys.filter((x) => !possibleKeys.includes(x))) {
        console.warn(`Theme contains unsupported key "${key}".`);
    }

    for (const key of possibleKeys.filter((x) => !themeKeys.includes(x))) {
        console.warn(`Theme is missing key "${key}".`);
    }
}

async function generateDocs() {
    const data = await fetchVSCodeDocs();

    // TODO: Finalize
    let docs = data
        .match(new RegExp("<code>.+?</code>.*", "g"))
        .map((key) => key.replace("<code>", "").replace("</code>", ""))
        .map((key) => key.replace("<li>", "").replace("</li>", ""))
        .map((key) => key.replace("<p>", "").replace("</p>", ""))
        .join("\n");


    const docsPath = path.join(__dirname, "..", "docs", "theme-color.txt");
    fs.promises.writeFile(docsPath, docs);

    console.log("");
}

async function scrapeThemeAvailableKeys() {
    const data = await fetchVSCodeDocs();
    const matches = data.match(new RegExp("<code>.+?</code>", "g"));

    if (!matches) {
        throw new Error("Couldn't find any matches with <code>...</code>, maybe docs have changed?");
    }

    return [...matches]
        .map((key) => key.replace("<code>", "").replace("</code>", ""))
        .filter((key) => !/ /.test(key)) // Remove if contains spaces
        .filter((key) => !/#.../.test(key)) // Remove if is a hex color
        .filter((key) => !/&quot;/.test(key)) // Remove if contains quotes
        .filter((key) => key.length > 4) // Remove if it's very small
        .filter((key) => !NOT_THEME_KEYS.includes(key)) // Remove if its in the blacklist
        .sort();
}

(async () => {
    // lintTheme();
    generateDocs();
})().catch(console.error);
