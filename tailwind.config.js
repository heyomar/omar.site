module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: false,
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'prime': '#3596fd',
                'second': '#140c36'
            },
            fontFamily: {
                'sans': ['Urbanist', 'sans-serif', 'ui-sans-serif', 'system-ui'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
