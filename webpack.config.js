const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode: "production",
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.jsx','.tsx','.js','jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'Sui',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /icons.+\.svg$/,
                loader: 'svg-sprite-loader',
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: "Sui",
    //         template: "index.html"
    //     })
    // ],
    // externals: {   //外部的库，不需打包
    //     react:{
    //         commonjs:'react',
    //         commonjs2:'react',
    //         amd:'react',
    //         root:'React'
    //     },
    //     'react-dom':{
    //         commonjs:'react-dom',
    //         commonjs2:'react-dom',
    //         amd:'react-dom',
    //         root:'React-dom'
    //     }
    // }
}