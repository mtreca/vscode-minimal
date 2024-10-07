const fs = require("fs").promises;
const getTheme = require("./theme");

const minimalSorcery = getTheme({
    theme: "sorcery",
    name: "Minimal - Sorcery",
});

const minimalDark = getTheme({
    theme: "dark",
    name: "Minimal - Dark",
});

fs.mkdir("./themes", { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile("./themes/minimal-sorcery.json", JSON.stringify(minimalSorcery, null, 2)),
            fs.writeFile("./themes/minimal-dark.json", JSON.stringify(minimalDark, null, 2)),
        ])
    )
    .catch(() => process.exit(1));
