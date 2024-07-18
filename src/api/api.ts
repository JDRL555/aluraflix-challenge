import { API_URI } from '../constants/api.constants'

import {
  GetResponseAPI, 
  PostResponseAPI, 
  PatchResponseAPI, 
  DeleteResponse, 
} from '../types/crud.types'

import { 
  APIContextProps, 
  Entities, Endpoint, QueryParams
} from '../types/api.types'

import { toQueryParams } from '../utils/params'

export class API<T extends Entities> implements APIContextProps<T> {
  data: T[] = []
  

  async get(
    endpoint: Endpoint, 
    query_params: QueryParams | null = null
  ): Promise<GetResponseAPI<T>> {
    let querys = ""
    let url = `${API_URI}/${endpoint}`

    if(query_params) {
      querys = toQueryParams(query_params)
      url += `?${querys}`
    }
    const response = await fetch(url)
    const data = await response.json()
    

    return { data }
  }

  async post(endpoint: Endpoint, entity: T): Promise<PostResponseAPI<T>> {
    const response = await fetch(`${API_URI}/${endpoint}`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(entity)
    })

    const data = await response.json()

    return { data }
  }

  async delete(endpoint: Endpoint, entityId: number): Promise<DeleteResponse> {
    const response = await fetch(`${API_URI}/${endpoint}/${entityId}`)

    if(response.status === 404) {
      return {
        error: "No se encontro"
      }
    }

    return { error: "" }
  }

  async patch(endpoint: Endpoint, entityId: number): Promise<PatchResponseAPI<T>> {

    const response = await fetch(`${API_URI}/${endpoint}/${entityId}`)

    if(response.status === 404) {
      return {
        error: "No se encontro",
      }
    }

    const data = await response.json()

    return { data }
  }
}