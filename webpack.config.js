module.exports = (env, argv) => ({
  entry: './src/index',
  output: {
    path: `${__dirname}/public/javascripts`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?this=>window,fix=>module.exports=0'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
      ]
  },
  devtool: argv.mode === 'development' ? 'source-map' : false
})
