import logo from '../../../public/imgs/logo.png'
import styles from './Index.module.css'

export default function Index() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" />
    </footer>
  )
}
