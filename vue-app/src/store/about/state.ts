import { About } from '../../models/sections/about'

const state = {
  about: {
    introduction: null as string | null,
    interests: null as string | null,
    goals: null as string | null,
    why: null as string | null,
  } as About,
}

export type State = typeof state

export default state
