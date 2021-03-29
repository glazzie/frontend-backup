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
    },
    ADD_TO_CART(state, { product, quantity }){
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists){
        exists.quantity += quantity
        return
      }
      state.cart.push({product , quantity})
    }
  },
  getters:{
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item =>{
        items += item.quantity
      })
      return items
    }
  },
  actions: {
    async loadProducts({commit}){
    let res = await api().get('/products')
    commit('SET_PRODUCTS', res.data)
    this.products = res.data.data

    let user = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user)
  },
    async loadUsers({commit}){
      let res = await api().get('/users')
      commit('SET_USERS', res.data)
      this.users = res.data.data

      
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
      
    },
    async register ({dispatch}, {email, password, firstName, lastName}){
      let res = await api().post('/users/register',{email: email, password: password, firstName: firstName, lastName: lastName})
      if (res.status === 201){
        dispatch('loginUser', {email: email, password: password})
      }  
    },

    async addToCart({commit}, { product, quantity }){
      commit('ADD_TO_CART', { product, quantity })
    }

  },
  modules: {
  }
})
