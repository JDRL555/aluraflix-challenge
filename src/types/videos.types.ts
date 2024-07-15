import { ResponseAPI } from './api.types'
import { Category } from './categories.types'

export interface Video {
  id: number,
  cover_url: URL,
  video_url: URL,
  banner_url: URL,
  categoryId: number,
  category?: Category,
  created_at: string
}

export interface VideosAction {
  type: "GET" | "POST" | "UPDATE" | "DELETE",
  video: Video,
  videoId: number
}