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
                'second': '#140c36',
                'paper-light': '#f6f0de',
                'paper-dark': '#f1f0de',
                'mustard': '#e1b549'
            },
            fontFamily: {
                'sans': ['Lexend', 'sans-serif', 'ui-sans-serif', 'system-ui'],
                'serif': ['Kaisei Tokumin', 'sans-serif', 'ui-sans-serif', 'system-ui'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
