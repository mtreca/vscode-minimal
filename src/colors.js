// const lightColors = require("@primer/primitives/dist/json/colors/light.json");
// const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

function getColors(theme) {
    switch (theme) {
        // case "light":
        //     // Temp override until Primitives are updated
        //     lightColors.success.emphasis = "#1f883d";
        //     lightColors.btn.primary.bg = lightColors.success.emphasis;
        //     lightColors.btn.primary.hoverBg = lightColors.scale.green[5];
        //     lightColors.fg.default = "#1f2328";
        //     lightColors.fg.muted = "#656d76";

        //     return lightColors;
        case "dark":
            darkColors = {
                fg: {
                    default: "#ffffff",
                    muted: "#cccccc",
                    // subtle: "#888888",
                    // onEmphasis: "#BBBBBB",
                },
                border: {
                    hidden: "#00000000",
                    active: "#765345",
                    muted: "#5f8787",
                    default: "#333333",
                },
                canvas: {
                    default: "#111111",
                    inset: "#222222",
                    overlay: "#555555",
                    subtle: "#5f8787",
                },
                state: {
                    danger: "#F2283C",
                },
                // TODO: Rename to BG
                ansi: {
                    black: "#888888",
                    red: "#F2283C",
                    green: "#00AE6B",
                    yellow: "#FFC200",
                    blue: "#277DFF",
                    magenta: "#D72E82",
                    cyan: "#875AFB",
                    white: "#BFBFBF",
                },
            };

            // Temp override until Primitives are updated
            // darkColors.fg.default = "#e6edf3";
            // darkColors.fg.muted = "#7d8590";
            // darkColors.accent.fg = "#2f81f7";
            // darkColors.severe.subtle = "rgba(219, 109, 40, 0.1)";
            // darkColors.danger.subtle = "rgba(248, 81, 73, 0.1)";
            // darkColors.done.subtle = "rgba(163, 113, 247, 0.1)";
            // darkColors.sponsors.subtle = "rgba(219, 97, 162, 0.1)";

            return darkColors;
        default:
            throw new Error(`Colors are missing for value: ${theme}`);
    }
}

module.exports = {
    getColors,
};
