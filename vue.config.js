module.exports = {
  publicPath:'./',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  },
  runtimeCompiler:true
}
