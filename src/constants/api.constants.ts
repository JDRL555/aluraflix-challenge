import { Endpoint } from '../types/api.types'

export const API_URI = import.meta.env.VITE_API_URI

export const ENDPOINTS: Endpoint[] = [
  {
    name: "videos",
    relation: { with: "category", type: "expand" }
  },
  {
    name: "categories",
    relation: { with: "videos", type: "embed" }
  }
]