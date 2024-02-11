import { State } from '../../store/experience/state'
import { ExperienceItem } from '../../models/sections/experience'

const getItems = (state: State): ExperienceItem[] => {
  return state.items || ([] as ExperienceItem[])
}

export default {
  getItems,
}
