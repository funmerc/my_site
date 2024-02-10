import axios from 'axios'
import { State } from './state'
import { ActionTree, Commit } from 'vuex'
import { getServer } from '../../modules/http'

const actions: ActionTree<State, any> = {
  getWorkExperienceItems: async ({
    commit,
  }: {
    commit: Commit
  }): Promise<void> => {
    commit('setLoading', true, { root: true })
    const path = `${getServer()}/api/work_experience_items`
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
    commit('setItems', items.data)
    commit('setLoading', false, { root: true })
  },
}

export default actions
