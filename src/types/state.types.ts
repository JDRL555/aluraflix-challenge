/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react'
import { Video } from './videos.types'
import { Category } from './categories.types'

type ActionTypes = "GET_VIDEOS" | "POST_VIDEOS" | "PATCH_VIDEOS" | "DELETE_VIDEOS" | 
  "GET_CATEGORIES" | "POST_CATEGORIES" | "PATCH_CATEGORIES" | "DELETE_CATEGORIES"

export interface State {
  videos: [] | Video[],
  categories: [] | Category[],
  error: string | null
}

export interface Action {
  type: ActionTypes,
  data?: any,
  id: number,
  error?: string
}

export interface AppContextValue {
  state?: State,
  dispatch?: Dispatch<Action>
}