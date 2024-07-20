/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react'

import Header from '../../components/Header/Index'
import Videos from '../../components/Videos/Index'

import { AppContext } from '../../context/AppContext'

import { API } from '../../api/api'

import { Video } from '../../types/videos.types'
import { Category } from '../../types/categories.types'
import { AppContextValue } from '../../types/state.types'

import styles from './Index.module.css'

const videoApi = new API<Video>()
const categoryApi = new API<Category>()

export default function Index() {
  const context = useContext<AppContextValue>(AppContext)

  useEffect(() => {
    async function getVideos() {
      const videos = await videoApi.get("videos")
      const categories = await categoryApi.get("categories")

      context.dispatch({ type: "GET_VIDEOS", data: videos.data })
      context.dispatch({ type: "GET_CATEGORIES", data: categories.data })
    }
    getVideos()
  }, [])

  if(context.state.videos.length === 0) {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
    <>
      <Header 
        video={context.state.videos[0]}
      />
      <main className={styles.main}>
        {
          context.state.categories.map(category => {
            if(category.videos.length !== 0) {
              return (
                <Videos 
                  videos={context.state.videos}
                  category={category}
                />
              )
            }
          })
        }
      </main>
    </>
  )
}
