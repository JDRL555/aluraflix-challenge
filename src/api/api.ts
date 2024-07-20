import { API_URI, ENDPOINTS } from '../constants/api.constants'

import {
  GetResponseAPI, 
  PostResponseAPI, 
  PatchResponseAPI, 
  DeleteResponse, 
} from '../types/crud.types'

import { 
  APIContextProps, 
  Entities, Endpoints, QueryParams
} from '../types/api.types'

import { toQueryParams } from '../utils/params'

export class API<T extends Entities> implements APIContextProps<T> {
  data: T[] = []
  

  async get(
    endpoint: Endpoints, 
    query_params: QueryParams | null = null
  ): Promise<GetResponseAPI<T>> {

    const endpointObject = ENDPOINTS.find(endpointItem => endpointItem.name === endpoint)

    let querys = ""
    let url = `${API_URI}/${endpointObject?.name}`

    if(endpointObject?.relation) {
      url += `?_${endpointObject.relation.type}=${endpointObject.relation.with}`
    }

    if(query_params) {
      querys = toQueryParams(query_params)
      url += `${endpointObject?.relation ? '&' : '?'}${querys}`
    }

    const response = await fetch(url)
    const data = await response.json()
    

    return { data }
  }

  async post(endpoint: Endpoints, entity: T): Promise<PostResponseAPI<T>> {
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

  async delete(endpoint: Endpoints, entityId: number): Promise<DeleteResponse> {
    const response = await fetch(`${API_URI}/${endpoint}/${entityId}`)

    if(response.status === 404) {
      return {
        error: "No se encontro"
      }
    }

    return { error: "" }
  }

  async patch(endpoint: Endpoints, entityId: number): Promise<PatchResponseAPI<T>> {

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