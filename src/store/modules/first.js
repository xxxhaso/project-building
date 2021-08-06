const state = {
  showFooter: true,
  changeNum: 105,
  collects: []
}
const getters = {
  isShow (state) {
    return state.showFooter
  },
  getChangeNum () {
    return state.changeNum
  }
}
const mutations = {
  show (state) {
    state.showFooter = true
  },
  hide (state) {
    state.showFooter = false
  },
  newNum (state, sum) {
    state.changeNum += sum
  },
  pushCollects (state, items) {
    state.collects.push(items)
  },
  exampleMutations (state, data) {
    state.changeNum = data.ID
  }
}
const actions = {
  hideFooter (context) {
    context.commit('hide')
  },
  // showFooter (context) {
  //   context.commit('show')
  // },
  getNem (context, num) {
    context.commit('newNum', num)
  },
  showFooter (context, item) {
    context.commit('pushCollects', item)
  },
  exampleActions (context, item) {
    state.changeNum = item.ID
  }
}
export default {
  namespaced: true, // 进行多模块处理
  state,
  getters,
  mutations,
  actions
}
