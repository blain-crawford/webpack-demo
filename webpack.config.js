const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist'
  },
  module: {  
    rules: [  
      {  
        test: /\.css$/i,  
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']   
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, 
    ]  
  } 
};