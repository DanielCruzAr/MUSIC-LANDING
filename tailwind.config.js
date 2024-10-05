/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#0A0C10",
                    light: "#424345",
                },
                secondary: {
                    violet: "#892066",
                    pink: "#E52996",
                    blue: "#18457C",
                },
                red: "#A41045",
                white: "#FFFFFF",
                grey: {
                    DEFAULT: "#B9B9B9",
                    light: "#D8D8D8",
                    dark: "#7D7E80",
                    pink: "#9B8595",
                    blue: "#95A1AD",
                },
                transparent: {
                    bg: "rgba(0, 0, 0, 0.03)",
                    stroke: "rgba(0, 0, 0, 0.13)",
                },
            },
            fontFamily: {
              body: ["Inter"]
            }
        },
    },
    plugins: [],
};
