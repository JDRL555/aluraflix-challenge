import { Video } from './videos.types'
import { Category } from './categories.types'

import { 
  GetResponseAPI, 
  PostResponseAPI, 
  PatchResponseAPI, 
  DeleteResponse 
} from './crud.types'

export type Entities = Video | Category

export interface Endpoint {
  name: "videos" | "categories",
  relation?: {
    with: "videos" | "category",
    type: "embed" | "expand"
  }
}

export type Endpoints = "videos" | "categories"

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
  get: (endpoint: Endpoints, query_params: QueryParams | null) => Promise<GetResponseAPI<T>>,
  post: (endpoint: Endpoints, entity: T) => Promise<PostResponseAPI<T>>,
  patch: (endpoint: Endpoints, entityId: number) => Promise<PatchResponseAPI<T>>,
  delete: (endpoint: Endpoints, entityId: number) => Promise<DeleteResponse>,
}
