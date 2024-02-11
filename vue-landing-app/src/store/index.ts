import axios from 'axios'
import { getServer } from '../modules/http'
import { Commit, createStore } from 'vuex'
import { AboutModule } from './about'
import { EducationModule } from './education'
import { ExperienceModule } from './experience'
import { SummaryModule } from './summary'

const rootActions = {
  getConfiguration: async ({ commit }: { commit: Commit }) => {
    const path = `${getServer()}/api/configuration`
    const response = await axios.get(path, {
      responseType: 'json',
      headers: { 'Content-Type': 'application/json' },
    })
    commit('setAppVersion', response?.data?.version || null)
  },
}

export default createStore({
  state: {
    blurLoadingBackground: true,
    loading: false,
    version: null as string | null,
  },
  getters: {
    pageLoadingBlur: (state: any) => state.blurLoadingBackground,
    pageLoading: (state: any) => state.loading,
    appVersion: (state: any) => state.version,
  },
  mutations: {
    setLoadingBlur: (state: any, value: boolean) =>
      (state.blurLoadingBackground = value),
    setLoading: (state: any, value: boolean) => (state.loading = value),
    setAppVersion: (state: any, value: string) => (state.version = value),
  },
  actions: rootActions,
  modules: {
    about: AboutModule,
    education: EducationModule,
    experience: ExperienceModule,
    summary: SummaryModule,
  },
})
