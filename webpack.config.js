const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname, './dist'),
        filename: 'main.js',
      },

      module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
              },
        ]
    },

      devServer:{

        static:{
            directory:path.resolve(__dirname,"dist")
        },
        port:3000,
         open:true,
         hot:true,
         compress:true, 
         historyApiFallback:true
    },


    plugins:[
        new HtmlWebpackPlugin({
            title:"Webpack App",
            filename:"index.html",
            template:"./src/index.html"
        }),

        new MiniCssExtractPlugin()


    ],

    optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                  // Svgo configuration here https://github.com/svg/svgo#configuration
                  [
                    "svgo",
                    {
                      plugins: [
                        {
                          name: "preset-default",
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ],
      },
    




}