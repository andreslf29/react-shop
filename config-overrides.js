const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components/',
    '@containers': 'src/containers/',
    '@pages':  'src/pages/',
    '@styles': 'src/styles/',
    '@icons': 'src/assets/icons/',
    '@logos': 'src/assets/logos/'
  })(config);

  return config;
};