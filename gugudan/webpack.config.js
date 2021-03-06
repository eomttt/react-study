const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 배포시: production
  devtool: 'eval', // (빠르게 하겠다) 배포시: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'] // .js 또는 .jsx 파일을 찾는다 (entry 안에 app에 있는 파일에 확장자를 붙여서 찾는다)
  },

  entry: {
    app: ['./client']
  }, // 입력
  module: { // Loaders
    rules: [{
      test: /\.jsx?$/, // .js 파일과 .jsx 파일에 rules (loader)를 적용
      loader: 'babel-loader', // babel 적용: 최신문법을 옛날 브라우저에서도 돌아갈 수 있게 변경하겠다.
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              // https://github.com/browserslist/browserslist
              // KR에서 점유율 5% 이상인 브라우저만 지원
              // chrome last 2 버전만 지원(즉, 특정 브라우저 버전만 지원, 만약 안넣으면 모든 브라우저를 지원해야 하기 때문에 babel이 하는일이 많아짐)
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            }
          }], // preset-env 에 대한 설정을 적용 하고 싶을 때에
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties'
        ] // Error fix
      },
    }]
  }, // entry에 파일을 읽고 거기에 module를 적용한 후 output에 뺸다.
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}) // Loader(module) 의 options에 다 {debug: true} 를 넣어줘라
  ], // webpack에서 기본적으로 합쳐주는애(module, rules 등) 말고 추가적으로 뭔가 더 하고 싶은것들
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist') // 현재 폴더 루트(__dirname) 에 'dist' 폴더 생성
  }, // 출력

};

// entry에 있는 파일에 module 적용 하고 plugins 까지 더 추가하고 output으로 나온다.
