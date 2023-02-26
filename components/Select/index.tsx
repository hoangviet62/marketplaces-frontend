import { SelectProps } from '@/interfaces/select-props'
import { TextField, MenuItem } from '@mui/material'
import * as React from 'react'

const Select: React.FC<SelectProps> = ({
  errors,
  register,
  fieldName,
  labelName,
  options,
  value,
}) => {
  const renderSelect = () => (
    <TextField
      defaultValue={value ? value : ''}
      sx={{ width: '100%', mb: 3 }}
      error={Boolean(errors[`${fieldName}`]?.message)}
      {...register(fieldName)}
      select
      label={labelName}
      helperText={errors[`${fieldName}`]?.message?.toString()}
    >
      {options.map((option, index) => (
        <MenuItem value={option.value} key={index}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )

  return <>{renderSelect()}</>
}

export default Select
