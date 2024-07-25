import { Input } from '../../types/form.types'
import VideoForm from './components/VideoForm/Index'
import styles from './Index.module.css'

const inputs: Input[] = [
  {
    label: "Titulo",
    id: "title",
    placeholder: "Ingrese un título",
    type: "text",
    onChange: () => {},
    status: "correct"
  },
  {
    label: "Categorías",
    id: "categories",
    placeholder: "Selecciona una categoría",
    type: "select",
    onChange: () => {},
    status: "correct",
    options: [
      {
        label: "Backend",
        value: "1"
      },
      {
        label: "Frontend",
        value: "2"
      },
      {
        label: "Innovación y gestión",
        value: "3"
      }
    ]
  },
  {
    label: "Imagen",
    id: "cover_url",
    placeholder: "Ingrese el enlace de la imagen",
    type: "text",
    onChange: () => {},
    status: "correct"
  },
  {
    label: "Video",
    id: "video_url",
    placeholder: "Ingrese el enlace del video",
    type: "text",
    onChange: () => {},
    status: "correct"
  },
  {
    label: "Descripción",
    id: "description",
    placeholder: "¿De qué trata el video?",
    type: "textarea",
    onChange: () => {},
    status: "correct"
  },
]

export default function Index() {
  return (
    <main className={styles.main_new_video}>
      <h1>Nuevo video</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <hr />
      <section>
        <h2>Crear tarjeta</h2>
        <hr />
        <VideoForm 
          inputs={inputs}
        />
        <button className={styles.btn}>
          Guardar
        </button>
        <button className={styles.btn}>
          Limpiar
        </button>
      </section>
    </main>
  )
}
