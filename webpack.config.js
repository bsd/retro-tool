const path = require(`path`);
const webpack = require(`webpack`);

/* Constants */
const isProduction = process.env.NODE_ENV === `production`;

/* Plugins */
const CleanWebpackPlugin = require(`clean-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const {CheckerPlugin} = require(`awesome-typescript-loader`);
const OfflinePlugin = require(`offline-plugin`);

/* Config */
const html = {
  title   : `DnDevice`,
  template: `src/index.html`,
};

module.exports = {

  entry: {
    index: `./src/${isProduction ? `prod.js` : `dev.js`}`,
  },

  output: {
    path    : path.resolve(__dirname, `dist`),
    filename: `[name].[hash].js`,
  },

  module: {
    rules: [

      { // Typescript Loader
        test: /\.ts|\.tsx$/,
        use : [
          {
            loader : `babel-loader`,
            options: {
              presets: [
                [`env`, {
                  targets: {
                    browsers: [`last 2 versions`, `safari >= 7`],
                  },
                }],
              ],
            },
          },
          `awesome-typescript-loader`,
        ],
      },

      { // Style Loader
        test   : /\.css|\.scss|\.sass/,
        exclude: /node_modules/,
        use    : isProduction ?
          ExtractTextPlugin.extract({
            fallback: `style-loader`,
            // resolve-url-loader may be chained before sass-loader if necessary
            use     : [`css-loader`, `resolve-url-loader`, `sass-loader`],
          }) :
          [`style-loader`, `css-loader`, `resolve-url-loader`, `sass-loader`],
      },

      { // Image Loader
        test   : /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use    : {
          loader : `url-loader`,
          options: {
            name : `[name].[hash].[ext]`,
            limit: 1000,
          },
        },
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin(html),
    new CleanWebpackPlugin([`dist`]),
    new ExtractTextPlugin(`styles.[hash].css`),
    // isProduction && new webpack.optimize.UglifyJsPlugin(),
    !isProduction && new webpack.HotModuleReplacementPlugin(),
    !isProduction && new webpack.NamedModulesPlugin(),
    !isProduction && new CheckerPlugin(),
    isProduction && new OfflinePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name     : `vendor`,
      minChunks: ({context}) => context && context.indexOf(`node_modules`) !== -1,
    }),
  ].filter((x) => x),

  resolve: {
    modules   : [path.resolve(__dirname, `src`), `node_modules`],
    extensions: [
      `.js`,
      `.jsx`,
      `.ts`,
      `.tsx`,
      `.scss`,
      `.css`,
    ],
  },

  devtool: isProduction ?
    false :
    `eval-source-map`,

  devServer: {
    hot        : true,
    contentBase: path.join(__dirname, `dist`),
    compress   : true,
    port       : 8000,
  },

};
