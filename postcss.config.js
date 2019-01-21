const postcssCustomMedia = require('postcss-custom-media');
const autoPrefixer = require('autoprefixer');
const postcssModules = require('postcss-modules');

module.exports = {
  postcssModules,
  plugins: [
    postcssCustomMedia,
    autoPrefixer({
      browsers: [
        '>0.2%',
        'not dead',
        'not ie <= 11',
        'not op_mini all',
      ],
    }),
  ],
};
