import { initialState } from '../reducer/AppReducer'
import { AppContextValue } from '../types/state.types'
import { createContext } from 'react'

export const AppContext = createContext<AppContextValue>({
  state: initialState,
  dispatch: () => {}
})