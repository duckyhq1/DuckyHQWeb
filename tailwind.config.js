/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: '"Be Vietnam Pro"'
            },
            backgroundImage: {
                'featured':
                "linear-gradient(to left bottom, rgba(0,0,0,0), rgba(14,14,14, 0.7)), url('/placeholder.png')",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
};
