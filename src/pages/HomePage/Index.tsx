import Header from '../../components/Header/Index'
import Videos from '../../components/Videos/Index'

import styles from './Index.module.css'

export default function Index() {
  return (
    <>
      <Header 
        video={
          {
            "id": 1,
            "title": "Todo lo que tienes que saber sobre el Backend",
            "description": "En este video, vamos a cubrir todo lo referente a como manejar el backend",
            "cover_url": new URL("https://i.ytimg.com/vi/XuSXJ9DUcvY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAegA_q67yopKMq9eK-WKdU0dRxOg"),
            "video_url": new URL("https://www.youtube.com/embed/XuSXJ9DUcvY?si=H3qnmguNHigfX9PF"),
            "banner_url": new URL("https://www.aluracursos.com/blog/assets/glosario/portada-glosario.png"),
            "categoryId": 2,
            "category": {
              "id": 2,
              "name": "backend",
              "color": "#00C86F"
            },
            "created_at": "12/07/2024"
          }
        }
      />
      <main className={styles.main}>
        <Videos 
          videos={
            [
              {
                "id": 2,
                "title": "Hooks de React, todo lo que necesitas saber",
                "description": "Si quieres aprender mas sobre los hooks de React, este es el video ideal para ti!",
                "cover_url": new URL("https://i.ytimg.com/vi/9xlea2yDFaY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ5ETL1P1sUwoARrk-2wuqXEkL_g"),
                "video_url": new URL("https://www.youtube.com/embed/9xlea2yDFaY"),
                "banner_url": new URL("https://www.aluracursos.com/blog/assets/react-hooks/img2.png"),
                "categoryId": 1,
                "category": {
                  "id": 1,
                  "name": "frontend",
                  "color": "#6BD1FF"
                },
                "created_at": "10/07/2024"
              },
              {
                "id": 3,
                "title": "¿Por qué Figma es tan importante en el ámbito laboral?",
                "description": "Tal vez hayas escuchado sobre Figma, pero seguramente no sabias la gran importancia y el potencial que tiene el mismo. En este video lo vas a averiguar",
                "cover_url": new URL("https://i.ytimg.com/vi/Y_6R3XTA2go/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpqG6NJdYHQEyYWzpvYhSwyNLtWQ"),
                "video_url": new URL("https://www.youtube.com/embed/Y_6R3XTA2go?si=2rDx8tSs_gWz8_d1"),
                "banner_url": new URL("https://www.brasilcode.com.br/wp-content/uploads/2024/02/figma.jpg"),
                "categoryId": 1,
                "category": {
                  "id": 1,
                  "name": "frontend",
                  "color": "#6BD1FF"
                },
                "created_at": "10/07/2024"
              },
              {
                "id": 3,
                "title": "¿Por qué Figma es tan importante en el ámbito laboral?",
                "description": "Tal vez hayas escuchado sobre Figma, pero seguramente no sabias la gran importancia y el potencial que tiene el mismo. En este video lo vas a averiguar",
                "cover_url": new URL("https://i.ytimg.com/vi/Y_6R3XTA2go/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpqG6NJdYHQEyYWzpvYhSwyNLtWQ"),
                "video_url": new URL("https://www.youtube.com/embed/Y_6R3XTA2go?si=2rDx8tSs_gWz8_d1"),
                "banner_url": new URL("https://www.brasilcode.com.br/wp-content/uploads/2024/02/figma.jpg"),
                "categoryId": 1,
                "category": {
                  "id": 1,
                  "name": "frontend",
                  "color": "#6BD1FF"
                },
                "created_at": "10/07/2024"
              },
              {
                "id": 3,
                "title": "¿Por qué Figma es tan importante en el ámbito laboral?",
                "description": "Tal vez hayas escuchado sobre Figma, pero seguramente no sabias la gran importancia y el potencial que tiene el mismo. En este video lo vas a averiguar",
                "cover_url": new URL("https://i.ytimg.com/vi/Y_6R3XTA2go/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpqG6NJdYHQEyYWzpvYhSwyNLtWQ"),
                "video_url": new URL("https://www.youtube.com/embed/Y_6R3XTA2go?si=2rDx8tSs_gWz8_d1"),
                "banner_url": new URL("https://www.brasilcode.com.br/wp-content/uploads/2024/02/figma.jpg"),
                "categoryId": 1,
                "category": {
                  "id": 1,
                  "name": "frontend",
                  "color": "#6BD1FF"
                },
                "created_at": "10/07/2024"
              }
            ]
          }
          category={
            {
              "id": 1,
              "name": "frontend",
              "color": "#6BD1FF"
            }
          }
        />
      </main>
    </>
  )
}
