import VideoInput from '../VideoInput/Index'
import { Input } from '../../../../types/form.types'
import styles from './Index.module.css'

interface props {
  inputs: Input[]
}

export default function Index({ inputs }: props) {
  return (
    <form className={styles.form}>
      {
        inputs.map(input => <VideoInput input={input} />)
      }
    </form>
  )
}
