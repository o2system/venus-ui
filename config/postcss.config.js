module.exports = {
  parser: 'postcss-scss',
  plugins: {
  	// require('autoprefixer'),
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {}
  }
}