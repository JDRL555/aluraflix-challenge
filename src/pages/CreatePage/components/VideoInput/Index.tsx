import { Input } from '../../../../types/form.types'
import styles from './Index.module.css'

interface props {
  input: Input
}

export default function Index({ input }: props) {
  return (
    <div className={styles.input_container}>
      <label className={`${styles.label} ${input.status === "incorrect" && styles.label_incorrect}`} htmlFor={input.id}>
        {input.label}
      </label>
      {
        input.type === "select"
        ?
        <select 
          id={input.id} 
          className={`${styles.select} ${input.status === "incorrect" && styles.input_incorrect}`}
          onChange={input.onChange}
        >
          <option disabled selected value="">
            Selecciona una opción
          </option>
          {
            input.options 
            &&
            input.options.map(option => 
              <option value={option.value}>
                {option.label}
              </option>
            )
          }
        </select> 
        :
        input.type == "textarea"
        ?
        <textarea 
          id={input.id}
          placeholder={input.placeholder}
          onChange={input.onChange}
          className={`${styles.textarea} ${input.status === "incorrect" && styles.input_incorrect}`}
        ></textarea>
        :
        <input 
          type={input.type}  
          id={input.id}
          placeholder={input.placeholder}
          onChange={input.onChange}
          className={`${styles.input} ${input.status === "incorrect" && styles.input_incorrect}`}
        />

      }
    </div>
  )
}
