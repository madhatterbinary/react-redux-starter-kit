const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('../project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'test'
const __PROD__ = project.env === 'production'

// Export a function. Accept the base config as the only param.
module.exports = function(storybookBaseConfig, configType) {
  
  const extractStyles = new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    allChunks: true,
    disable: __DEV__,
  })

  storybookBaseConfig.plugins.push(extractStyles)
  storybookBaseConfig.plugins.push(HtmlWebpackPlugin)
  
  ;[
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml'],
  ].forEach((font) => {
    const extension = font[0]
    const mimetype = font[1]

    storybookBaseConfig.module.rules.push({
      test    : new RegExp(`\\.${extension}$`),
      loader  : 'url-loader',
      options : {
        name  : 'fonts/[name].[ext]',
        limit : 10000,
        mimetype,
      },
    })
  })

  storybookBaseConfig.module.rules.push({
    test: /\.(sass|scss|css)$/,
    loader: extractStyles.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: project.sourcemaps,
            minimize: {
              autoprefixer: {
                add: true,
                remove: true,
                browsers: ['last 2 versions'],
              },
              discardComments: {
                removeAll : true,
              },
              discardUnused: false,
              mergeIdents: false,
              reduceIdents: false,
              safe: true,
              sourcemap: project.sourcemaps,
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: project.sourcemaps,
            includePaths: [
              inProjectSrc('styles'),
            ],
          },
        }
      ],
    })
  })

  // Return the altered config
  return storybookBaseConfig;
};