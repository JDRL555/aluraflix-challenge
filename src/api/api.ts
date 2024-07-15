import { API_URI } from '../constants/api.constants'

import {
  GetResponseAPI, 
  PostResponseAPI, 
  PatchResponseAPI, 
  DeleteResponse, 
} from '../types/crud.types'

import { 
  APIContextProps, 
  Entities, Endpoint
} from '../types/api.types'

export class API<T extends Entities> implements APIContextProps<T> {
  data: T[] = []
  

  async get(endpoint: Endpoint): Promise<GetResponseAPI<T>> {
    const response = await fetch(`${API_URI}/${endpoint}`)
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