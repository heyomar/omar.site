module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'prime': '#3596fd',
                'second': '#140c36'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
