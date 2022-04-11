export const state = () => ({
  list: [{ text: 'Beli Makan', done: false }],
  isLoading: false,
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  setIsLoading(state, param) {
    state.isLoading = param
  },
}

export const actions = {
  addTodo(store, param) {
    store.commit('add', param)
  },
  removeTodo(store, param) {
    store.commit('remove', param)
  },
  fetchData(store, param) {
    // Anggap ini Fetch Data
    store.commit('setIsLoading', true)

    setTimeout(() => {
      store.commit('setIsLoading', false)
    }, 3000)
  },
}
