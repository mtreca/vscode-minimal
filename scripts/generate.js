const { readFile } = require("fs").promises;
const { join } = require("path");
const { Type, DEFAULT_SCHEMA, load } = require("js-yaml");

async function getThemeMapping() {

    const withAlphaType = new Type("!alpha", {
        kind: "sequence",
        construct: ([hexRGB, alpha]) => hexRGB + alpha,
        represent: ([hexRGB, alpha]) => hexRGB + alpha,
    });

    const schema = DEFAULT_SCHEMA.extend([withAlphaType]);

    mappingFile = join(__dirname, "..", "colors", "mapping.yml")
    mapping = await readFile(mappingFile, "utf-8");
    const base = load(mapping, { schema });

    return base
}

async function generateJSONTheme() {
    const base = await getThemeMapping();

    for (const key of Object.keys(base.colors)) {
        if (!base.colors[key]) {
            delete base.colors[key];
        }
    }

    return { base };
}

module.exports = { getThemeMapping, generateJSONTheme };
