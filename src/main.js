import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modal from "@burhanahmeed/vue-modal-2";

Vue.use(Modal, {
  componentName: "ModalVue"
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
