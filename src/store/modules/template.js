var storage = window.localStorage

const state = {
  template: {
    drawer: (storage.getItem('drawer') == null) ? true : JSON.parse(storage.getItem('drawer')),
    drawerRight: (storage.getItem('drawerRight') == null) ? false : JSON.parse(storage.getItem('drawerRight'))
  }
}

const getters = {
  drawer (state) {
    return state.template.drawer
  },
  drawerRight (state) {
    return state.template.drawerRight
  }
}

const mutations = {
  setDrawer (state, drawer) {
    state.template.drawer = drawer
    storage.setItem('drawer', state.template.drawer)
  },
  setDrawerRight (state, drawerRight) {
    state.template.drawerRight = drawerRight
    storage.setItem('drawerRight', state.template.drawerRight)
  }
}

const actions = {
  setDrawer ({ commit }, drawer) {
    commit('setDrawer', drawer)
  },
  setDrawerRight ({ commit }, drawerRight) {
    commit('setDrawerRight', drawerRight)
  }
}

export var template = {
  state,
  getters,
  mutations,
  actions
}
