import { State } from './state'
import { About } from '../../models/sections/about'

const getAboutInformation = (state: State): About => {
  return state.about
}

export default {
  getAboutInformation,
}
