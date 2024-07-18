import { Video } from './videos.types'
import { Category } from './categories.types'

import { 
  GetResponseAPI, 
  PostResponseAPI, 
  PatchResponseAPI, 
  DeleteResponse 
} from './crud.types'

export type Entities = Video | Category

export type Endpoint = "videos" | "categories"

export interface QueryParams {
  videos: {
    id: number[],
    categoryId: number[],
    created_at: string[]
  },
  categories: {
    name: string[]
  }
}

export interface APIContextProps<T> {
  data: T[],
  get: (endpoint: Endpoint, query_params: QueryParams | null) => Promise<GetResponseAPI<T>>,
  post: (endpoint: Endpoint, entity: T) => Promise<PostResponseAPI<T>>,
  patch: (endpoint: Endpoint, entityId: number) => Promise<PatchResponseAPI<T>>,
  delete: (endpoint: Endpoint, entityId: number) => Promise<DeleteResponse>,
}
