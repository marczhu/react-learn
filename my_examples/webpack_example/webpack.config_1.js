module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // ������require�ļ���ʱ�����ֱ��ʹ��require('file')������ʹ��require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  }
};