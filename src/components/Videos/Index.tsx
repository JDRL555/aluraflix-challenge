import { Category } from '../../types/categories.types'
import { Video as VideoProps } from '../../types/videos.types'

import Video from './components/VideoCard/Index'

import styles from './Index.module.css'

interface props {
  videos: VideoProps[],
  category: Category
}

export default function Index({ videos, category }: props) {
  return (
    <section className={styles.videos_container}>
      <button className={styles.btn} style={{ backgroundColor: category.color }}>
        {category.name}
      </button>
      <div className={styles.videos_list}>
        {
          videos.filter(video => video.category.name === category.name).map(video => (<Video video={video} />))
        }
      </div>
    </section>
  )
}
