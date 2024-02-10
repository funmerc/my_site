import { State } from './state'
import { ImageLink } from '../../models/sections/summary'

const getLinks = (state: State): ImageLink[] => {
  return state.links || ([] as ImageLink[])
}

export default {
  getLinks,
}
