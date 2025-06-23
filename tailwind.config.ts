/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // for app directory
        "./pages/**/*.{js,ts,jsx,tsx}",     // if using pages directory
        "./components/**/*.{js,ts,jsx,tsx}", // shared components
        "./src/**/*.{js,ts,jsx,tsx}",       // in case you use /src folder
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3076B2',
                "primary-dark": '#003A6D',
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                jost: ['var(--font-jost)']
            }
        },
    },
    plugins: [],
}
