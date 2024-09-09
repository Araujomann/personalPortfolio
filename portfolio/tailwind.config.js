/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,tsx}"],

    theme: {
        extend: {
            width: {
                '128': '32rem', // 512px
                '144': '36rem', // 576px
                '160': '40rem', // 640px
              },
              height: {
                '128': '32rem', // 512px
                '144': '36rem', // 576px
                '160': '40rem', // 640px
              },
             fontSize: {    
                '10xl': '10rem',
                '11xl': '11rem',
             },
            backgroundImage: {
                'conic-gradient': 'conic-gradient(from 0deg at 50% 50%, red, yellow, green, blue, red)',
                'gradient-to-t': 'linear-gradient(to top, #EAE6DC , #EAE6DC)',
              },

            keyframes: {
                
            },
            animation: {
               
            },
            fontFamily: {
                sans: ["New Amsterdam", "Roboto", "sans-serif"],
                serif: ["DM Serif Text", "sans-serif"],
                roboto: ["Roboto Condensed", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
                anton: ["Anton", "sans-serif"],
                fjalla: ["Fjalla One", "sans-serif"],
                silks: ["Silkscreen", "sans-serif"],
                satisfy: ["Satisfy", "sans-serif"],
            },
            colors: {
                bege: "#EAE6DC",
                greenTitle: "#0B6353",
                blueImageProject: "#0250c5",
                yellowJs: "#f0db4f",
                grayNext: "#B0B0B0",
                blueSubmit: "#007BFF",
            },
            height: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                192: "48rem",
                208: "52rem",
                224: "56rem",
                240: "60rem",
                256: "64rem",
                272: "68rem",
                288: "72rem",
                304: "76rem",
                320: "80rem",
                336: "84rem",
                352: "88rem",
                368: "92rem",
                384: "96rem",
                400: "100rem",
            },
        },
        plugins: [],
    },
};
