import { Video } from '../../../../types/videos.types'

import editIcon from '../../../../../public/imgs/edit.png'
import deleteIcon from '../../../../../public/imgs/delete.png'

import styles from './Index.module.css'

interface props {
  video: Video
}

export default function Index({ video }: props) {
  return (
    <div className={styles.video_container}>
      <div className={styles.video_cover_container}>
        <img 
          className={styles.video_cover} 
          src={video.cover_url.toString()} 
          alt="cover_img" 
        />
        <div
          className={styles.video_cover_shadow}
          style={{ 
            boxShadow: `inset 5px 5px 5px ${video.category.color}, inset -5px -5px 5px ${video.category.color}` 
          }}
        ></div>
      </div>
      <div 
        className={styles.video_footer}
        style={{ 
          boxShadow: `inset 5px 0 5px ${video.category.color}, inset -5px -5px 5px ${video.category.color}` 
        }}
      >
        <div className={styles.video_footer_action}>
          <img className={styles.video_cover_img} src={deleteIcon} alt="edit_icon" />
          <p>Borrar</p>
        </div>
        <div className={styles.video_footer_action}>
          <img src={editIcon} alt="delete_icon" />
          <p>Editar</p>
        </div>
      </div>
    </div>
  )
}
