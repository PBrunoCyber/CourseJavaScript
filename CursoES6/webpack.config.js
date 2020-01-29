module.exports = {
    entry: ['@babel/polyfill', './WebPackServer/src/webPackMain.js'],
    output: {
        path: __dirname + '/WebPackServer/public',
        filename: 'bundleWebPack.js'
    },
    devServer: {
        contentBase: __dirname + '/WebPackServer/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodu_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },

}