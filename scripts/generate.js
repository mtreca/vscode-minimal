const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const THEME_DIR = path.join(__dirname, "..", "colors");

async function getTheme(themeName, removeNulls = true) {
    const withAlphaType = new yaml.Type("!alpha", {
        kind: "sequence",
        construct: ([hexRGB, alpha]) => hexRGB + alpha,
        represent: ([hexRGB, alpha]) => hexRGB + alpha,
    });

    const schema = yaml.DEFAULT_SCHEMA.extend([withAlphaType]);
    const themeFile = await fs.promises.readFile(`${THEME_DIR}/${themeName}.yml`, "utf-8");
    const mappingFile = await fs.promises.readFile(`${THEME_DIR}/mapping.yml`, "utf-8");

    const theme = yaml.load(`${themeFile}\n${mappingFile}`, { schema });

    if (removeNulls) {
        for (const key of Object.keys(theme.colors)) {
            if (!theme.colors[key]) {
                delete theme.colors[key];
            }
        }
    }

    return theme;
}

module.exports = { getTheme };
