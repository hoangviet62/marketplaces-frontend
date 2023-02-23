import { InputProps } from '@/interfaces/input-props'
import { TextField } from '@mui/material'
import * as React from 'react'
import UploadFiles from '../UploadFiles'

const Input: React.FC<InputProps> = ({
  errors,
  register,
  fieldName,
  labelName,
  type = 'text',
  multiple = false,
  control
}) => {
  const renderTextField = () => (
    <TextField
      sx={{ width: '100%', mb: 3 }}
      label={labelName}
      {...register(fieldName)}
      error={Boolean(errors[`${fieldName}`]?.message)}
      helperText={errors[`${fieldName}`]?.message?.toString()}
      type={type}
    />
  )

  const renderFileField = () => (
    <UploadFiles
      errors={errors}
      register={register}
      fieldName={fieldName}
      labelName={labelName}
      control={control}
      multiple={multiple}
    />
  )

  return <>{type === 'file' ? renderFileField() : renderTextField()}</>
}

export default Input
