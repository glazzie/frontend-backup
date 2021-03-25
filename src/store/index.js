import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    users: [],
    currentUser: {},
    cart: [],
  },
  mutations: {
    SET_PRODUCTS(state, products){
      state.products = products
    },

    SET_CART(state){
      state.cart = state.currentUser.cart
    },

    SET_USERS(state, users){
      state.users = users
    },
    LOGOUT_USER(state){
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({})
    },
    SET_CURRENT_USER(state, user){
      state.currentUser = user
      window.localStorage.currentUser = JSON.stringify(user)
    }
  },
  actions: {
    async loadProducts({commit}){
    let res = await api().get('/products')
    commit('SET_PRODUCTS', res.data)
    this.products = res.data.data
  },
    async loadUsers({commit}){
      let res = await api().get('/users')
      commit('SET_USERS', res.data)
      this.users = res.data.data

      let user = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user)
    },
    logoutUser({commit}) {
      commit('LOGOUT_USER')
    },
    async loginUser({commit}, {email, password}){
      try {
        let res = await api().post('/users/login', {email: email, password: password})
        let user = res.data
        commit('SET_CURRENT_USER', user)
        return {user}
      }
      catch{
        return {error: "Username/Password combination was incorrect"}
      }
      
    }
  },
  modules: {
  }
})
