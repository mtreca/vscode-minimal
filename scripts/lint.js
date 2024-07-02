const https = require('https');
const generate = require('./generate');

const THEME_COLOR_REFERENCE_URL = 'https://code.visualstudio.com/api/references/theme-color';

const NOT_THEME_KEYS = [
    'workbench.colorCustomizations',
    'editor.tokenColorCustomizations',
];

const get = url =>
    new Promise((resolve, reject) => {
        https.get(url, res => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', data => (body += data));
            res.on('end', () => resolve(body));
            res.on('error', reject);
        });
    });

async function scrapeThemeAvailableKeys() {
    const data = await get(THEME_COLOR_REFERENCE_URL);
    // console.log(data);

    const matches = data.match(new RegExp('<code>.+?</code>', 'g'));

    if (!matches) {
        throw new Error(
            "Couldn't find any matches with <code>...</code>, maybe docs have changed?"
        );
    }

    return [...matches]
        .map(key => key.replace('<code>', '').replace('</code>', ''))
        .filter(key => !/ /.test(key)) // Remove if contains spaces
        .filter(key => !/#.../.test(key)) // Remove if is a hex color
        .filter(key => !/&quot;/.test(key)) // Remove if contains quotes
        .filter(key => key.length > 4) // Remove if it's very small
        .filter(key => !NOT_THEME_KEYS.includes(key)) // Remove if its in the blacklist
        .sort();
}

(async () => {

    const possibleKeys = await scrapeThemeAvailableKeys();

    const mapping = await generate.getThemeMapping();
    const themeKeys = Object.keys(mapping.colors);

    for (const key of themeKeys.filter((x) => !possibleKeys.includes(x))) {
        console.warn(`Theme contains unsupported key "${key}".`);
    }

    for (const key of possibleKeys.filter((x) => !themeKeys.includes(x))) {
        console.warn(`Theme is missing key "${key}".`);
    }
})().catch(console.error);
