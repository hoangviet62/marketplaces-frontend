import Container from '@/components/Container'
import { CategoryPayload } from '@/interfaces/category'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import validators from '@/validators/category'
import Input from '@/components/Input'
import useUpdateCategory from '@/hooks/Category/useUpdateCategory'
import { trimFormField } from '@/utils/trim-form-field'
import useParams from '@/hooks/Params'
import useCategory from '@/hooks/Category/useCategory'
import { useEffect } from 'react'
import { useLoading } from '@/context/loading'

const AdminCategory: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm<CategoryPayload>({
    resolver: zodResolver(validators),
  })

  const { mutate } = useUpdateCategory()
  const { id } = useParams()
  const { data, isFetching } = useCategory(id)
  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(isFetching)
  }, [isFetching])

  useEffect(() => {
    if (!data?.name) return
    setValue('name', data.name)
    setFocus('name')
  }, [data])

  const onSubmit = (data: CategoryPayload) => {
    const trimedForm = trimFormField(data)
    const formData = new FormData()
    formData.append('name', trimedForm.name)
    mutate({ data: formData, id })
  }

  const renderUpdateForm = () => (
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
  return (
    <Container maxWidth="sm">
      <h1>Category</h1>
      {renderUpdateForm()}
    </Container>
  )
}

export default AdminCategory
