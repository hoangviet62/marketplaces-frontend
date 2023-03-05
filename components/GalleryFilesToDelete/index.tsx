/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputProps } from '@/interfaces/input-props'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
  FormHelperText,
  InputLabel,
  Checkbox,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useController } from 'react-hook-form'
import Image from 'next/image'

const GalleryFilesToDelete: React.FC<InputProps> = ({
  errors,
  fieldName,
  labelName,
  control,
  value,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [deletedFiles, setDeletedFiles] = useState<any>([])

  const { field } = useController({ name: fieldName, control })
  //   field.onChange(uploadedFiles.concat(Array.from(files)))

  console.log('field', field)

  useEffect(() => {
    field.onChange(deletedFiles.map((file: any) => file.id))
  }, [deletedFiles])

  const handleCheck = (
    _: React.MouseEvent<HTMLLabelElement, MouseEvent>,
    item: any
  ) => {
    // field.onChange(cloneUploadedFiles)
    const isExist = deletedFiles.findIndex((f: any) => f.id === item.id) > -1
    console.log(isExist)
    if (isExist) {
      setDeletedFiles((current: any) =>
        current.filter((file: any) => file.id !== item.id)
      )
    } else {
      setDeletedFiles((current: any) => [...current, item])
    }
  }

  return (
    <>
      <InputLabel variant="outlined" sx={{ mb: 3 }}>
        {labelName}
      </InputLabel>
      {value && (
        <ImageList
          gap={20}
          sx={{
            mb: 8,
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280fr, 1fr)!important',
          }}
          cols={isMobile ? 2 : 3}
        >
          {value.map((item: any, index: number) => (
            // <Card key={index}>
            <ImageListItem key={index}>
              <Image
                src={`${process.env.apiUrl}${item.url}`}
                alt="Image for category"
                height={144}
                width={208}
              />
              <ImageListItemBar
                position="top"
                sx={{
                  textAlign: 'center',
                  background: theme.palette.common.white,
                }}
                actionPosition="right"
                actionIcon={<Checkbox onClick={(e) => handleCheck(e, item)} />}
              ></ImageListItemBar>
            </ImageListItem>
          ))}
        </ImageList>
      )}

      {errors[`${fieldName}`]?.message && (
        <FormHelperText sx={{ mb: 3, pl: 3 }} error>
          {errors[`${fieldName}`]?.message}
        </FormHelperText>
      )}
    </>
  )
}

export default GalleryFilesToDelete
