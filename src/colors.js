// const chroma = require("chroma-js");

const alpha = (color, alpha) => {
    return `${color}${alpha}`;
    // return chroma(color).alpha(alpha).hex()
};

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

// function changeColorToHexAlphas(obj) {
//   if (typeof obj === 'object') {
//     for (var keys in obj) {
//       if (typeof obj[keys] === 'object') {
//         changeColorToHexAlphas(obj[keys])
//       } else {
//         let keyValue = obj[keys]
//         if(chroma.valid(keyValue)){
//           obj[keys] = chroma(keyValue).hex();
//         }
//       }
//     }
//   }
//   return obj;
// }

const colors = {
    hidden: "#00000000",
    widget: {
        border: "#222222",
        button: "#1b1b1b",
        hover: "#333333",
        input: "#1b1b1b",
        shadow: "#00000000",
    },
    foreground: {
        default: "#ffffff",
        muted: "#cccccc",
        link: "#277dff",
    },
    background: {
        default: "#000000",
        selection: "#ffffff30",
    },
    state: {
        info: "#277dff",
        error: "#f2283c",
    },
};

function getColors(theme) {
    return colors;
}

module.exports = {
    getColors,
};
