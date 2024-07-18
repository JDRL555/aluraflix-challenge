import { QueryParams } from '../types/api.types'

export function toQueryParams(queryParams: QueryParams): string {
  const params: string[] = []
  
  for(const [entity, properties] of Object.entries(queryParams)) {
    for(const property in properties) {
      const values: string[] = properties[property]

      values.map(value => params.push(`${entity}.${property}=${encodeURIComponent(value)}`))
    }
  }

  return params.join("&")
} 
