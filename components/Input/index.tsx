import { InputProps } from '@/interfaces/input-props'
import { TextField } from '@mui/material'
import * as React from 'react'

const Input: React.FC<InputProps> = ({
  errors,
  register,
  fieldName,
  labelName,
  type = 'text',
}) => {
  return (
    <TextField
      sx={{ width: '100%', mb: 3 }}
      label={labelName}
      {...register(fieldName)}
      error={Boolean(errors[`${fieldName}`]?.message)}
      helperText={errors[`${fieldName}`]?.message?.toString()}
      type={type}
    />
  )
}

export default Input
