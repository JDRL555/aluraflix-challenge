import NavbarItem from '../NavbarItem/Index'
import { NAV_ITEMS } from '../../../../constants/navbar.constants'

export default function Index() {
  return (
    <div>
      {
        NAV_ITEMS.map(
          item => <NavbarItem label={item.label} link={item.link} />
        )
      }
    </div>
  )
}
