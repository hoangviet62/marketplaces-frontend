/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from '@/components/Table'
import { Category } from './types'
import Image from 'next/image'
import { convertUTCToLocalTime } from '@/utils/time'
import useCategories from '@/hooks/Category/useCategories'
import useDeleteCategory from '@/hooks/Category/useDeleteCategory'
import useCreateCategory from '@/hooks/Category/useCreateCategory'
import useUpdateCategory from '@/hooks/Category/useUpdateCategory'
import { Typography, Box, Button } from '@mui/material'
import { useModal } from '@/context/modal'
import { CategoryPayload } from '@/interfaces/category'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import validators from '@/validators/category'
import Input from '@/components/Input'
import { useEffect } from 'react'

const Categories = () => {
  const { data } = useCategories()

  const { mutate: mutateDelete } = useDeleteCategory()
  const { mutate: mutateCreate } = useCreateCategory()
  const { mutate: mutateUpdate } = useUpdateCategory()
  const { setModalContent, showModal, hideModal } = useModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    setError
  } = useForm<CategoryPayload>({
    resolver: zodResolver(validators),
  })

  const handleDeleteConfirm = (e: any, id: any) => {
    mutateDelete(id)
  }

  const onSubmit = (id: number | undefined, data: CategoryPayload) => {
    const formData = new FormData()
    formData.append('name', data.name)
    if (data.images) {
      for (const file of data?.images) {
        formData.append('images', file)
      }
    }
    id ? mutateUpdate({ data: formData, id }) : mutateCreate(formData)
    hideModal()
  }

  const actionButton = { text: 'Create' }
  const fields = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'images',
      header: 'Image',
      Cell: ({ cell }: { cell: any }) => {
        const record = cell.getValue()
        const imageUrl = record?.length > 0 && record[0]?.url && `${process.env.apiUrl}${record[0].url}`
        return record?.length > 0 ? <Image src={imageUrl}
          alt="Image for category"
          width={64}
          height={64} /> : "-"
      },
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
      Cell: ({ cell }: { cell: any }) => {
        const createdAt = cell.getValue()
        return convertUTCToLocalTime(createdAt)
      },
    }
  ]

  const deleteModal = (record: Category) => {
    const { id, name } = record

    return <>
      <Box sx={{ display: 'block', justifyContent: 'center' }}>
        <Typography sx={{ mb: 2 }}>
          Are you sure you want to delete <strong>{name}</strong> ?
        </Typography>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={hideModal}
          >
            <Typography>Cancel</Typography>
          </Button>
          <Button
            variant="contained"
            onClick={(e) => handleDeleteConfirm(e, id)}
            color="error"
          >
            <Typography>Delete</Typography>
          </Button>
        </div>
      </Box>
    </>
  }

  const metqua = (e) => Object.entries(e).forEach((k, v) => console.log(k, v))

  const formModal = (record?: any) => {
    const id = record?.id
    const formAction: string = id ? `Edit` : `Create`

    setValue("name", id ? record.name : "")

    return <form onSubmit={handleSubmit(async (data) => { onSubmit(id, data) }, e => metqua(e))}>
      <Box sx={{ display: 'block', justifyContent: 'center' }}>
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h6">{formAction}</Typography>
        <Input
          key={`name_${record?.id}`}
          fieldName="name"
          labelName="Name"
          errors={errors}
          register={register}
          type="text"
        />
        {!id && <Input
          fieldName="images"
          labelName="Upload Image"
          errors={errors}
          register={register}
          type="file"
          control={control}
        />}
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={hideModal}
          >
            <Typography>Cancel</Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disableElevation
          >
            <Typography>{formAction}</Typography>
          </Button>
        </div>
      </Box>
    </form >
  }

  const handleDelete = (record: any) => {
    setModalContent(deleteModal(record))
    showModal()
  }

  const handleCreate = () => {
    setModalContent(formModal())
    showModal()
  }

  const handleUpdate = (record: Category) => {
    setModalContent(formModal(record))
    showModal()
  }

  return <>
    <Table<Category>
      actionButton={actionButton}
      fields={fields}
      data={data}
      handleDelete={handleDelete}
      handleCreate={handleCreate}
      handleUpdate={handleUpdate}
    />
  </>
}

export default Categories;