import { QueryParams } from '../types/api.types'

export function toQueryParams(queryParams: QueryParams): string {
  const params: string[] = []
  
  for(const properties of Object.values(queryParams)) {
    for(const property in properties) {
      const values: string[] = properties[property]

      values.map(value => params.push(`${property}=${encodeURIComponent(value)}`))
    }
  }

  return params.join("&")
} 
