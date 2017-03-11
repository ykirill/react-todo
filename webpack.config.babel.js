/**
 * Created by nemaeska on 11.03.17.
 */
// import webpack from 'webpack';
import path from 'path';

const BuildDir = path.resolve(__dirname, 'dist');
const AppDir = path.resolve(__dirname, 'src/app');
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

console.log(`${NODE_ENV} mode`);

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
    ],
  },
  watch: !isProd,
};

export default config;
