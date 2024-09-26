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
    element: {
        button: {
            background: "#222222",
        },
    },
    state: {
        info: "#277dff",
    },
    foreground: {
        default: "#ffffff",
    },
    background: {
        default: "#000000",
    }
};

function getColors(theme) {
    return colors;
}

module.exports = {
    getColors,
};
