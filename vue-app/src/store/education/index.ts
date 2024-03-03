import state, { State } from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { Module } from 'vuex'

export const EducationModule: Module<State, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
