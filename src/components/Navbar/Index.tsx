import logo from '../../../public/imgs/logo.png'

import styles from './Index.module.css'

import NavbarList from './components/NavbarList/Index'

export default function Index() {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src={logo} alt="" />
      </div>
      <NavbarList />
    </nav>
  )
}
