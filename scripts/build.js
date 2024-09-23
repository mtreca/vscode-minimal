const fs = require("fs");
const path = require("path");
const generate = require("./generate");

const OUTPUT_DIR = path.join(__dirname, "..", "theme");

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

module.exports = async () => {
    const themes = ["black", "paper"];

    return Promise.all(
        themes.map(async (themeName) => {
            const themeFile = await generate.getTheme(themeName, true);
            fs.promises.writeFile(`${OUTPUT_DIR}/minimal-${themeName}.json`, JSON.stringify(themeFile, null, 4));
        })
    );
};

if (require.main === module) {
    module.exports();
}
