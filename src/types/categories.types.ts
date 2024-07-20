import { Video } from './videos.types'
import { CSSProperties } from 'react'

export interface Category {
  id: number,
  name: string,
  videos: Video[],
  color: CSSProperties["color"]
}