module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                secondary: "#9CCD62",
                primary: "#3A3C42",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
