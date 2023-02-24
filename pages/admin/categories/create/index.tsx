import Container from '@/components/Container'
import { CategoryPayload } from '@/interfaces/category'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  CardActions,
  CardContent,
} from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import validators from '@/validators/category'
import Input from '@/components/Input'
import useAddCategory from '@/hooks/Category/useAddCategory'

const AdminCreateCategory: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CategoryPayload>({
    resolver: zodResolver(validators),
  })

  const { mutate } = useAddCategory()
  
  const onSubmit = (data: CategoryPayload) => {
    const formData = new FormData()
    formData.append('name', data.name)
    if (data.images) {
      for (const file of data?.images) {
        formData.append('images', file)
      }
    }

    mutate(formData)
  }

  const renderCreateCategoryForm = () => (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent>
          <Input
            fieldName="name"
            labelName="Name"
            errors={errors}
            register={register}
            type="text"
          />
          <Input
            fieldName="images"
            labelName="Upload Images"
            errors={errors}
            register={register}
            type="file"
            multiple={true}
            control={control}
          />
          <Input
            fieldName="medias"
            labelName="Upload Medias"
            errors={errors}
            register={register}
            type="file"
            multiple={true}
            control={control}
          />
        </CardContent>
        <CardActions sx={{ mb: 1, mt: 'auto', textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '50%' }}
            disableElevation
          >
            Create
          </Button>
        </CardActions>
      </Card>
    </form>
  )
  return (
    <Container maxWidth="sm">
      <h1>Create Category</h1>
      {renderCreateCategoryForm()}
    </Container>
  )
}

export default AdminCreateCategory
