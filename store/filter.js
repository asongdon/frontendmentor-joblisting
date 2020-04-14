import data from '@/static/data/data.json'

export const state = () => ({
  fullFilteredList: data,
  filters: [],
  filteredList: []
})

export const mutations = {
  setFilter(state, filter) {
    if (state.filters.indexOf(filter) === -1) {
      state.filters.push(filter)
    }
  },
  unSetFilter(state, filter) {
    for (var i = 0; i < state.filters.length; i++) {
      if (state.filters[i] === filter) {
        state.filters.splice(i, 1)
      }
    }
  },
  unSetAllFilter(state) {
    state.filters = []
  },
  unSetFilteredList(state) {
    state.filteredList = []
  },
  filterByTags(state, list) {
    state.filteredList = list
  }
}

export const actions = {
  async filterTag({ commit }, filter) {
    await commit('setFilter', filter)
  },
  async removeTag({ commit }, filter) {
    await commit('unSetFilter', filter)
  },
  async clearTag({ commit }) {
    await commit('unSetAllFilter')
  },
  async filterByTags({ commit }, list) {
    await commit('filterByTags', list)
  },
  async unSetFilteredList({ commit }) {
    await commit('unSetFilteredList')
  }
}
