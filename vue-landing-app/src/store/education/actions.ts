import axios from 'axios'
import { State } from './state'
import { ActionTree, Commit } from 'vuex'
import { getServer } from '../../modules/http'

const actions: ActionTree<State, any> = {
  getEducationItems: async ({ commit }: { commit: Commit }): Promise<void> => {
    commit('setLoading', true, { root: true })
    const path = `${getServer()}/api/education_items`
    const items = await axios
      .get(path, {
        headers: { 'Content-Type': 'application/json' },
      })
      .catch((err) => {
        console.error(
          err?.response?.error?.message || 'An unknown error occurred'
        )
        return { data: [] }
      })
    commit('setItems', items.data?.education)
    commit('setLoading', false, { root: true })
  },
}

export default actions
