import { Link, useLocation } from 'react-router-dom'

import { NavItem } from '../../../../types/navbar.types'

import styles from './Index.module.css'

export default function Index({ label, link }: NavItem) {
  const location = useLocation()
  return (
    <Link to={link} className={link === location.pathname ? styles.link_selected : styles.link}>
      { label }
    </Link>
  )
}
