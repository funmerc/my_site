import { State } from './state'
import { EducationItem } from '../../models/sections/education'

const getItems = (state: State): EducationItem[] => {
  return state.items || ([] as EducationItem[])
}

export default {
  getItems,
}
