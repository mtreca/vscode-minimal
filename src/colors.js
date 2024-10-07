const chroma = require("chroma-js");

const alpha = (color, alpha) => {
    return chroma(color).alpha(alpha).hex();
};

const darkColors = {
    background: "#000000",
    button: "#1b1b1b",
    input: "#1b1b1b",
    hover: "#222222",
    foreground: "#ffffff",
    muted: "#aaaaaa",
    disabled: "#666666",
    comment: "#999999",
    border: "#222222",
    hidden: "#00000000",
    match: alpha("#277dff", 0.6),
    selection: alpha("#ffffff", 0.3),
    blue: "#277dff",
    cyan: "#875afb",
    green: "#00ae6b",
    magenta: "#d72e82",
    red: "#f2283c",
    white: "#ffffff",
    yellow: "#ffc200",
};

const sorceryColors = {
    background: "#111111",
    button: "#1b1b1b",
    input: "#1b1b1b",
    hover: "#222222",
    foreground: "#dddddd",
    muted: "#aaaaaa",
    disabled: "#666666",
    comment: "#999999",
    border: "#222222",
    hidden: "#00000000",
    match: alpha("#5f87af", 0.6),
    selection: alpha("#dddddd", 0.3),
    red: "#af5f5f",
    green: "#5f8787",
    yellow: "#87875f",
    blue: "#5f87af",
    cyan: "#5fafaf",
    magenta: "#5f5f87",
    white: "#ffffff",
};

function getColors(theme) {
    switch (theme) {
        case "sorcery":
            return sorceryColors;
        case "dark":
            return darkColors;
        default:
            throw new Error(`Invalid color name passed: ${theme}`);
    }
}

module.exports = {
    alpha,
    getColors,
};
