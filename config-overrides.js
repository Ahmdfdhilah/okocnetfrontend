const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@containers': 'src/containers',
    '@components': 'src/components',
    '@img': 'src/asset/img',
    '@galeri': 'src/asset/img/galeri',
    '@mitra-kerjasama': 'src/asset/img/mitra-kerjasama',
  })(config);

  return config;
};