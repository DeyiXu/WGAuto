const path = require('path');

//引入glob
var glob = require('glob');
//entries函数
var entries = function () {
  var jsDir = path.resolve(__dirname, 'src/js')
  var entryFiles = glob.sync(jsDir + '/*.js')
  var map = {};

  for (var i = 0; i < entryFiles.length; i++) {
    var filePath = entryFiles[i];
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = filePath;
  }
  return map;
}

module.exports = {
  //entry: `${__dirname}/src/main.js`,
  entry: entries(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 15 versions']
                })
              ]
            }
          },
          'less-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 15 versions']
                })
              ]
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  //插件数组
  plugins: [

  ]
};