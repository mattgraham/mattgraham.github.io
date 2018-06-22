module.exports = {
    debugInfo: true,
    proxy: "localhost:4000",
    files: [
        'assets/styles/*.scss',
        '**/*.md',
        '**/*.html'
    ],
    ghostMode: {
        forms: true,
        links: true,
        scroll: true
    }
};
