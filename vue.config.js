module.exports = {
    devServer: {
        overlay: {
            warning: true,
            errors: true
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
};