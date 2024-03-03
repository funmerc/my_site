import { ExperienceItem } from '../../models/sections/experience'
import { State } from './state'

const setItems = (state: State, items: ExperienceItem[]) => {
  state.items = items
}

export default {
  setItems,
}
