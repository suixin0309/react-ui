const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

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
        library: 'sui',
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
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    devMode ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: '../'
                        }
                    },
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
                        }
                    }]
            }
        ]
    }
}