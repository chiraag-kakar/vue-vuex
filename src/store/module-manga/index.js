import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
const mangaModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default mangaModule
