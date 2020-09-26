const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 배포시에는 production으로 변경해야한다.
  devtool: 'eval',
  resolve: {
    // 웹팩이 알아서 경로 / 확장자를 처리할 수 있게 도와주는 옵션
    extensions: ['.js', '.jsx'],
  },
  entry: './src/index.js', // 웹팩이 읽어들일 파일
  module: {
    // js 모듈의 변환을 rules에 맞게 처리해준다.
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    // 번들링된 js 파일이 저장될 위치와 파일명
    path: path.join(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}