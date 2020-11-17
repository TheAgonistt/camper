// data
export const state = () => ({
  active: false
})

// motation
export const mutations = {
  toggle(state) {
    const current = state.active
    if (current) {
      state.active = false
    }

    if (!current) {
      state.active = true
    }
  },

  close(state) {
    state.active = false
  },

  open(state) {
    state.active = true
  }
}

// getters
export const getters = {
  get(state) {
    return state.active
  },

  getState(state) {
    return state.active
  }
}