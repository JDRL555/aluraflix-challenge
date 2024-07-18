import { Category } from '../../types/categories.types'
import { Video } from '../../types/videos.types'
import styles from "./Index.module.css"

interface props {
  category: Category,
  video: Video
}

export default function Index({ category, video }: props) {
  return (
    <header className={styles.header} style={{ backgroundImage: `url("${video.banner_url}")` }}>
      <section className={styles.gradient}>
        <div className={styles.cover_details}>
          <h1 style={{ backgroundColor: category.color }}>
            {category.name}
          </h1>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
        <div className={styles.cover_container}>
          <img 
            className={styles.cover} 
            src={video.cover_url.toString()} 
            alt="cover" 
          />
          <div
            className={styles.cover_shadow}
            style={{ 
              boxShadow: `inset ${category.color} 3px 3px 10px 0, inset ${category.color} -3px -3px 10px 0` 
            }}
          ></div>
        </div>
      </section>
    </header>
  )
}
