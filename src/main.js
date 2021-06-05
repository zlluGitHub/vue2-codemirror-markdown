import Vue from 'vue';
import App from './App.vue';
import MkEditor from './index';
const comment = {
  install: function (Vue) {
    Vue.component(MkEditor.name, MkEditor)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

Vue.use(comment)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
