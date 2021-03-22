module.exports = {
  // This file is necessary to force storybook to use the root directory .babelrc.js file,
  // although it shouldn't be according to the documentation. 
  // https://storybook.js.org/docs/react/configure/babel#custom-config-file
  // Here it states that it should automatically be grabbing from the root .babelrc.js file
  // if it exists however it does not, hence the extends property in this file below. And no,
  // making the file .babelrc instead of .babelrc.js does not fix it.
  extends: '../.babelrc.js'
}