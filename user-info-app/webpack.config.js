var path = require("path");
const webpack = require('webpack');
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


console.log(process.env.NODE_ENV);
var NODE_ENV=process.env.NODE_ENV;
var config = {
   // entry: SRC_DIR + "\\app\\index.js",  
    entry: ["babel-polyfill",  SRC_DIR + "\\app\\index.js"],
    
    output: {
        path: DIST_DIR + "\\app",
        filename: "bundle.js",
        publicPath: "\\app\\"
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
          }),
        new CleanWebpackPlugin()
      ],
    module: {
        rules: [
        
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                  
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
            },
            {
              test: /\.(sa|sc|c)ss$/,
            
                use: [
                  'style-loader',
                  { loader: 'css-loader',  options: {
                    importLoaders: 1,
                    modules: true
                  
                  } },
                  'sass-loader'
               
                ],
                
              }
        ]
    }
};

module.exports = config;

