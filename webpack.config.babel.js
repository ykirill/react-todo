/**
 * Created by nemaeska on 11.03.17.
 */
// import webpack from 'webpack';
import Logger from 'js-logger';
import path from 'path';

const BuildDir = path.resolve(__dirname, 'dist');
const AppDir = path.resolve(__dirname, 'src/app');
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

Logger.useDefaults();
Logger.info(`${NODE_ENV} mode`);

const config = {
  entry: path.join(AppDir, 'index.js'),
  output: {
    path: BuildDir,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        enforce: 'pre',
        include: AppDir,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: AppDir,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
  watch: !isProd,
};

export default config;
