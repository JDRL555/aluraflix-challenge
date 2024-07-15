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

export interface APIContextProps<T> {
  data: T[],
  get: (endpoint: Endpoint) => Promise<GetResponseAPI<T>>,
  post: (endpoint: Endpoint, entity: T) => Promise<PostResponseAPI<T>>,
  patch: (endpoint: Endpoint, entityId: number) => Promise<PatchResponseAPI<T>>,
  delete: (endpoint: Endpoint, entityId: number) => Promise<DeleteResponse>,
}
