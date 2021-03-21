const path = require('path');

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(options => {
        options[0].title = 'Resume | Jerryfangr'
        return options
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variable.scss";`,
      },
    },
  },
}