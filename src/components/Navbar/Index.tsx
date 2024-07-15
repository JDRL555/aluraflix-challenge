import { Link } from 'react-router-dom'

import logo from '../../../public/imgs/logo.png'

import styles from './Index.module.css'

export default function Index() {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Link to={"/"} className={styles.link}>
          Home
        </Link>
        <Link to={"/videos/new"} className={styles.link}>
          Crear video
        </Link>
      </div>
    </nav>
  )
}
