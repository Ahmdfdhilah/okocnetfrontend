const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'assets'),
      '@components': path.resolve(__dirname, 'components'),
      '@galeri': path.resolve(__dirname, 'asset/img/galeri'),
      '@mitra-kerjasama': path.resolve(__dirname, 'asset/img/mitra-kerjasama')
    },
  },
  // Other Webpack configurations
};