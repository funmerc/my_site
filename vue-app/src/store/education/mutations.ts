import { EducationItem } from '../../models/sections/education'
import { State } from './state'

const setItems = (state: State, items: EducationItem[]) => {
  state.items = items
}

export default {
  setItems,
}
