const chroma = require("chroma-js");

const alpha = (color, alpha) => {
    return chroma(color).alpha(alpha).hex();
};

const colors = {
    // TODO Regroup all colors to the top level for now, much easier to deal with
    hidden: "#00000000",
    state: {
        pass: "#00ae6b",
        info: "#277dff",
        error: "#f2283c",
        warning: "#ffc200",
    },
    interface: {
        border: "#222222",
        button: "#1b1b1b",
        background: "#000000",
        foreground: "#ffffff",
        hover: "#222222",
        input: "#1b1b1b",
        link: "#277dff",
        muted: "#aaaaaa",
        shadow: "#00000000",
    },
    editor: {
        comment: "#999999",
        selection: alpha("#ffffff", 0.3),
        match: alpha("#277dff", 0.6),
        range: alpha("#ffc200", 0.3),
    },
    widget: {
        border: "#222222",
        shadow: "#00000000",
    },
    foreground: {
        default: "#ffffff",
        comment: "#999999",
    },
    background: {
        default: "#000000",
        selection: "#ffffff40",
        range: "#444444",
    },
};

function getColors(theme) {
    return colors;
}

module.exports = {
    alpha,
    getColors,
};
