/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepMap,
  FieldError,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form'

interface Options {
  label: string
  value: number
}

export interface SelectProps {
  fieldName: string
  labelName: string
  errors: Partial<DeepMap<any, FieldError>>
  register: UseFormRegister<FieldValues> | any
  options: Options[]
  value?: Options["value"]
}
