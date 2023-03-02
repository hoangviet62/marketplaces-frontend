import { InputProps } from '@/interfaces/input-props'
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  useMediaQuery,
  useTheme,
  FormHelperText,
} from '@mui/material'
import { useState } from 'react'
import { useController } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'

const UploadFiles: React.FC<InputProps> = ({
  errors,
  fieldName,
  labelName,
  multiple = false,
  control,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [uploadedFilesURL, setuploadedFilesURL] = useState<string[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [cloneUploadedFiles, setCloneUploadedFiles] = useState<File[]>([])

  const { field } = useController({ name: fieldName, control })

  const handleFileChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { files } = event.target as HTMLInputElement
    if (files) {
      const imageArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      )
      setuploadedFilesURL((prevImages) => prevImages.concat(imageArray))
      setUploadedFiles((prevFiles) => prevFiles.concat(Array.from(files)))
      setCloneUploadedFiles((prevFiles) => prevFiles.concat(Array.from(files)))

      field.onChange(uploadedFiles.concat(Array.from(files)))
    }
  }

  const handleDelete = (
    _: React.MouseEvent<HTMLLabelElement, MouseEvent>,
    index: number
  ) => {
    const cloneUploadedFilesURL = JSON.parse(JSON.stringify(uploadedFilesURL))
    cloneUploadedFiles.splice(index, 1)
    cloneUploadedFilesURL.splice(index, 1)

    field.onChange(cloneUploadedFiles)
    setUploadedFiles(cloneUploadedFiles)
    setuploadedFilesURL(cloneUploadedFilesURL)
  }

  console.log(errors)

  return (
    <>
      <Button
        variant="contained"
        component="label"
        sx={{ width: '100%', mb: 3 }}
      >
        {labelName}
        <Input
          type="file"
          sx={{ display: 'none' }}
          inputProps={{
            multiple,
            onChange: (e) => handleFileChange(e),
          }}
        />
      </Button>
      {uploadedFilesURL.length > 0 && (
        <ImageList
          gap={20}
          sx={{
            mb: 8,
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280fr, 1fr)!important',
          }}
          cols={isMobile ? 2 : 3}
        >
          {uploadedFilesURL.map((item, index) => (
            // <Card key={index}>
            <ImageListItem key={index}>
              <img
                width="100%"
                height="100%"
                src={item}
                alt="aaa"
                loading="lazy"
              />
              <ImageListItemBar
                position="top"
                sx={{ textAlign: 'center' }}
                actionPosition="right"
                actionIcon={
                  <Button
                    variant="contained"
                    component="label"
                    onClick={(e) => handleDelete(e, index)}
                    color="error"
                  >
                    <CloseIcon />
                  </Button>
                }
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

export default UploadFiles
