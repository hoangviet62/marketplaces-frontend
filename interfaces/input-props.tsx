/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepMap,
  FieldError,
  UseFormRegister,
  FieldValues,
  Control,
} from 'react-hook-form'

export interface InputProps {
  fieldName: string
  labelName: string
  errors: Partial<DeepMap<any, FieldError>>
  register: UseFormRegister<FieldValues> | any
  type?: string
  multiple?: boolean
  control?: Control<any, any>
}
