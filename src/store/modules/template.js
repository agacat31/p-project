var storage = window.localStorage

const state = {
  template: {
    drawer: true
  }
}

const getters = {
  drawer (state) {
    return state.template.drawer
  }
}

const mutations = {
  setDrawer (state, drawer) {
    state.template.drawer = drawer
    storage.setItem('drawer', JSON.stringify(state.template.drawer))
  }
}

const actions = {
  setDrawer ({ commit }, drawer) {
    commit('setDrawer', drawer)
  }
}

export var template = {
  state,
  getters,
  mutations,
  actions
}
