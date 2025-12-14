/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Open Sans', 'sans-serif'],
            },
            colors: {
                primary: '#0f172a', // Slate 900
                accent: '#3b82f6', // Blue 500
                steel: '#94a3b8', // Slate 400
            }
        },
    },
    plugins: [],
}
