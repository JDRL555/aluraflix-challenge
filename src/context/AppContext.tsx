import { AppContextValue } from '../types/state.types'
import { createContext } from 'react'

export const AppContext = createContext<AppContextValue | null>(null)