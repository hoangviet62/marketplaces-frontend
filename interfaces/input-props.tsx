/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepMap,
  FieldError,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form'

export interface InputProps {
  fieldName: string
  labelName: string
  errors: Partial<DeepMap<any, FieldError>>
  register: UseFormRegister<FieldValues>
  type?: string
}
