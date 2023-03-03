/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@/components/Container'
import { ProductPayload } from '@/interfaces/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import validators from '@/validators/product'
import Input from '@/components/Input'
import useUpdateProduct from '@/hooks/Product/useUpdateProduct'
import { trimFormField } from '@/utils/trim-form-field'
import useParams from '@/hooks/Params'
import useProduct from '@/hooks/Product/useProduct'
import { useEffect } from 'react'
import Select from '@/components/Select'
import useCategories from '@/hooks/Category/useCategories'

const AdminProduct: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ProductPayload>({
    resolver: zodResolver(validators),
  })

  const { mutate } = useUpdateProduct()
  const { id } = useParams()
  const { data } = useProduct(id)
  const { data: categories } = useCategories()

  useEffect(() => {
    if (!data) return
    setValue('name', data.name)
    setValue('description', data.description)
    setValue('tag', data.tag)
    setValue('category_id', data.category_id)
  }, [data, setValue])

  const onSubmit = (data: ProductPayload) => {
    const categoryId = data.category_id.toString()
    const trimedForm = trimFormField(data)
    const formData = new FormData()

    formData.append('name', trimedForm.name)
    formData.append('description', trimedForm.description)
    formData.append('category_id', categoryId)
    formData.append('tag', trimedForm.tag)
    mutate({ data: formData, id })
  }

  const mapCategoriesOptions = () => {
    return categories?.data.map((category: any) => {
      return {
        value: category.ID,
        label: category.name,
      }
    })
  }

  const renderUpdateForm = () => {
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
              value={getValues('category_id')}
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
          </CardContent>
          <CardActions sx={{ mb: 1, mt: 'auto', textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '50%' }}
              disableElevation
            >
              Update
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
  return (
    <Container maxWidth="sm">
      <h1>Product</h1>
      {getValues('category_id') && categories && data && renderUpdateForm()}
    </Container>
  )
}

export default AdminProduct
