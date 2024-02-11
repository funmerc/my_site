import { State } from './state'
import { About } from '../../models/sections/about'

const setAboutInformation = (state: State, value: About) => {
  state.about = value
}

export default {
  setAboutInformation,
}
