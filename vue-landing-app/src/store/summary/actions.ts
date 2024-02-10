import axios from 'axios'
import { State } from './state'
import { ActionTree, Commit } from 'vuex'
import { getServer } from '../../modules/http'

const actions: ActionTree<State, any> = {
  getTechImage: async (
    { commit }: { commit: Commit },
    imageName: string
  ): Promise<string> => {
    const path = `${getServer()}/api/summary_image_links/images/${imageName}`
    try {
      const response = await axios.get(path, { responseType: 'blob' })
      const imageUrl = URL.createObjectURL(response.data)
      commit('setLoading', false, { root: true })
      return imageUrl
    } catch (err: any) {
      console.error(
        err?.response?.error?.message || 'An unknown error occurred'
      )
    }
    commit('setLoading', false, { root: true })
    return ''
  },
  getSummaryTechLinks: async ({
    commit,
  }: {
    commit: Commit
  }): Promise<void> => {
    commit('setLoading', true, { root: true })
    const path = `${getServer()}/api/summary_image_links`
    const response = await axios
      .get(path, {
        headers: { 'Content-Type': 'application/json' },
      })
      .catch((err) => {
        console.error(
          err?.response?.error?.message || 'An unknown error occurred'
        )
        return { data: { default: [] } }
      })

    commit('setLinks', response.data.default)
    commit('setLoading', false, { root: true })
  },
}

export default actions
