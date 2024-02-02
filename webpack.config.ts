import path from 'path'
import { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'

const config: Configuration = {
  mode: 'development',
  entry: './server/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
}

export default config
