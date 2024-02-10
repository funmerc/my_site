import { createStore } from 'vuex'
import { ExperienceModule } from './experience'
import { SummaryModule } from './summary'

export default createStore({
  state: {
    loading: false,
  },
  getters: {
    pageLoading: (state: any) => state.loading,
  },
  mutations: {
    setLoading: (state: any, value: boolean) => (state.loading = value),
  },
  actions: {},
  modules: {
    experience: ExperienceModule,
    summary: SummaryModule,
  },
})
