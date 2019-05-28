const base = require('./webpack.config')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'doc'),
  },
  entry: {
    ...base.entry,
    example: './example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sui',
      template: 'example.html',
      filename: 'example.html'
    })
  ]
})