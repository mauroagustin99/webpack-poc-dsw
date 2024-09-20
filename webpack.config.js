const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //Limpia la carpeta dist antes de cada compilacion
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        // Soporte css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Soporte imagenes
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // Template HTML
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
