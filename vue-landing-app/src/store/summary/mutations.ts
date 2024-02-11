import { ImageLink } from '../../models/sections/summary'
import { State } from './state'

const setLinks = (state: State, links: ImageLink[]) => {
  state.links = links
}
export default {
  setLinks,
}
