export interface GetResponseAPI<T> {
  data: T[]
}

export interface PostResponseAPI<T> {
  data: T
}

export interface PatchResponseAPI<T> {
  data?: T,
  error?: string
}

export interface DeleteResponse {
  error?: string
}