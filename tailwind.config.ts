import type { Config } from "tailwindcss"

const config = {

    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            screens: {
                '2xl': '1440px'
            }
        },
        extend: {
            colors: {
                "primary": '#3076B2',
                "primary-dark": '#003A6D',
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                jost: ['var(--font-jost)']
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config





// /** @type {import('tailwindcss').Config} */

// module.exports = {
//     content: [
//         "./app/**/*.{js,ts,jsx,tsx}",       // for app directory
//         "./pages/**/*.{js,ts,jsx,tsx}",     // if using pages directory
//         "./components/**/*.{js,ts,jsx,tsx}", // shared components
//         "./src/**/*.{js,ts,jsx,tsx}",       // in case you use /src folder
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 primary: '#3076B2',
//                 "primary-dark": '#003A6D',
//             },
// fontFamily: {
//     inter: ['var(--font-inter)'],
//     jost: ['var(--font-jost)']
// }
//         },
//     },
//     plugins: [],
// }
