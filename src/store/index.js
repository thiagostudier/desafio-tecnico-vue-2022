import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    order: 'desc'
  },
  mutations: {
    UPDATE_SEARCH(state, search) {
      state.search = search
    },
    UPDATE_ORDER(state, order) {
      state.order = order
    }
  },
  actions: {
    changeSearch(context, search) {
      context.commit('UPDATE_SEARCH', search)
    },
    changeOrder(context, order) {
      context.commit('UPDATE_ORDER', order)
    }
  },
  getters: {
    search: function(state) {
      return state.search
    },
    order: function(state) {
      return state.order
    }
  }
})
