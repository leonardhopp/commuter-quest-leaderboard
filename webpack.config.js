const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  // The entry point file described above
  entry: './src/index.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'), // or wherever your files are
    compress: true,
    port: 9000, // you can specify your port
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Path to your template file
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // RegEx to match files ending with .css
        use: ['style-loader', 'css-loader'] // Use these loaders
      },
      // ... other rules
    ]
  },
};
