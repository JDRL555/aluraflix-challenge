import Header from '../../components/Header/Index'


export default function Index() {
  return (
    <main>
      <Header 
        category={{ id: 2, name: "Backend", color: "#00C86F" }}
        video={
          {
            "id": 1,
            "title": "Todo lo que tienes que saber sobre el Backend",
            "description": "En este video, vamos a cubrir todo lo referente a como manejar el backend",
            "cover_url": new URL("https://i.ytimg.com/vi/XuSXJ9DUcvY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAegA_q67yopKMq9eK-WKdU0dRxOg"),
            "video_url": new URL("https://www.youtube.com/embed/XuSXJ9DUcvY?si=H3qnmguNHigfX9PF"),
            "banner_url": new URL("https://www.aluracursos.com/blog/assets/glosario/portada-glosario.png"),
            "categoryId": 2,
            "created_at": "12/07/2024"
          }
        }
      />
      <h1>Home Page</h1>
    </main>
  )
}
