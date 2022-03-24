import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCart: (state) => [...state.cart],
    getCartCount: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0)
  },
  mutations: {
    setCatalog: (state, catalog) => { state.catalog = catalog },
    setCart: (state, cart) => { state.cart = cart },
    addToCart: (state, product) => { 
      const existProduct = state.cart.find(item => item.id === product.id)
      console.log(product);
      if(existProduct) {
        existProduct.quantity++
      } else {
        state.cart.push(Object.assign({quantity: 1}, product))
      }
    },
    removeFromCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id === id)

      state.cart.splice(idx, 1);
    },
    setQuantity: (state, {id, quantity}) => {
      const product = state.cart.find(item => item.id === id)
      product.quantity = quantity
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch(`/api/v1/catalog`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCatalog', data);
        })
    },
    loadCart({ commit }) {
      return fetch(`/api/v1/cart`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCart', data);
        })
    },
    addToCart({ commit }, product) {
      return fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('addToCart', product);
        })
    },
    setQuantity({ commit }, {id, quantity}) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({quantity: quantity})
      })
        .then(() => {
          commit('setQuantity', {id, quantity});
        })
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('removeFromCart', id);
        })
    }
  }
})
