import Container from '@/components/Container'
import { ProductPayload } from '@/interfaces/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import validators from '@/validators/product'
import Input from '@/components/Input'
import useAddProduct from '@/hooks/Product/useAddProduct'
import useCategories from '@/hooks/Category/useCategories'
import Select from '@/components/Select'

const AdminCreateProduct: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ProductPayload>({
    resolver: zodResolver(validators),
  })

  const { mutate } = useAddProduct()
  const { data } = useCategories()

  const onSubmit = (data: ProductPayload) => {
    const categoryId = data.category_id.toString()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category_id', categoryId)
    formData.append('tag', data.tag)

    if (data.images) {
      for (const file of data?.images) {
        formData.append('images', file)
      }
    }

    if (data.medias) {
      for (const file of data?.medias) {
        formData.append('medias', file)
      }
    }

    mutate(formData)
  }

  const mapCategoriesOptions = () => {
    return data.map((category) => {
      return {
        value: category.ID,
        label: category.name,
      }
    })
  }

  const renderCreateProductForm = () => {
    const options = mapCategoriesOptions()

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent>
            <Select
              fieldName="category_id"
              labelName="Category"
              errors={errors}
              register={register}
              options={options}
            />
            <Input
              fieldName="name"
              labelName="Name"
              errors={errors}
              register={register}
              type="text"
            />
            <Input
              fieldName="description"
              labelName="Description"
              errors={errors}
              register={register}
              type="text"
            />
            <Input
              fieldName="tag"
              labelName="Tag"
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
  }
  return (
    <Container maxWidth="sm">
      <h1>Create Product</h1>
      {data && renderCreateProductForm()}
    </Container>
  )
}

export default AdminCreateProduct
