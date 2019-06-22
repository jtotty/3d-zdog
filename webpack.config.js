const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {
        rules: [
            {
                test: require.resolve('./node_modules/zdog/js/dragger.js'),
                use: 'imports-loader?this=>window'
            }
        ]
    }
};
