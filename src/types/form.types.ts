import { HTMLInputTypeAttribute, ChangeEvent } from 'react'

interface Option {
  label: string,
  value: string
}

export interface Input {
  label: string,
  id: string,
  type: HTMLInputTypeAttribute | "select" | "textarea",
  onChange: (event: ChangeEvent) => void,
  placeholder: string,
  status: "correct" | "incorrect",
  value?: string,
  options?: Option[]
}