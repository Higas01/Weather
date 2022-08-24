const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader', // babel-loader --> permite transpilar os arquivos JS utilizando babel e webpack
                    options: {
                        presets: ['@babel/env'], // @babel/env --> Permite utilizar o JS mais recente para compilação
                    }
                }
            },
        ] 
    },
    devtool: 'source-map',
}