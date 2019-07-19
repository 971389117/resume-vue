import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/font_1273212_pcnqr8vc37/iconfont.js'
import marked from 'marked'
Vue.config.productionTip = false

// let renderMD = new marked.Renderer()
// marked.setOptions({
//   renderMD,
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false
//   })

new Vue({
  render: h => h(App),
}).$mount('#app')
