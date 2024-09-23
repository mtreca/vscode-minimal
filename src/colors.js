const chroma = require("chroma-js");

const alpha = (color, alpha) => {
    return chroma(color).alpha(alpha).hex();
};

const colors = {
    // TODO: Test this one out
    default: "default",

    // Interface - Background
    background: "#000000",
    button: "#1b1b1b",
    input: "#1b1b1b",
    hover: "#222222",

    // Interface - Foreground
    foreground: "#ffffff",
    muted: "#aaaaaa",
    disabled: "#666666",
    comment: "#999999",

    // Interface - Others
    border: "#222222",
    hidden: "#00000000",

    // Editor - Search
    match: alpha("#277dff", 0.6),
    selection: alpha("#ffffff", 0.3),

    // State
    pass: "#00ae6b",
    info: "#277dff",
    error: "#f2283c",
    conflict: "#d72e82",
    warning: "#ffc200",

    // Terminal
    blue: "#277dff",
    cyan: "#875afb",
    green: "#00ae6b",
    magenta: "#d72e82",
    red: "#f2283c",
    white: "#ffffff",
    yellow: "#ffc200",
};

function getColors(theme) {
    return colors;
}

module.exports = {
    alpha,
    getColors,
};
