/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from '@/components/Table'
import { ProductsData, Product, ProductPayload } from '@/interfaces/product'
import Image from 'next/image'
import { convertUTCToLocalTime } from '@/utils/time'
import useProducts from '@/hooks/Product/useProducts'
import useDeleteProduct from '@/hooks/Product/useDeleteProduct'
import useCreateProduct from '@/hooks/Product/useCreateProduct'
import useUpdateProduct from '@/hooks/Product/useUpdateProduct'
import { Typography, Box, Button } from '@mui/material'
import { useModal } from '@/context/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import validators from '@/validators/product'
import Input from '@/components/Input'
import { useEffect, useState } from 'react'
import Select from '@/components/Select'
import useCategories from '@/hooks/Category/useCategories'
import GalleryFilesToDelete from '@/components/GalleryFilesToDelete'

const Products = () => {
  const [payload, setPayload] = useState({ page: 1, perPage: 10 })
  const { data } = useProducts(payload)
  const { data: categoriesData } = useCategories()

  const { mutate: mutateDelete } = useDeleteProduct()
  const { mutate: mutateCreate } = useCreateProduct()
  const { mutate: mutateUpdate } = useUpdateProduct()
  const [currentRecord, setCurrentRecord] = useState<any>(null)
  const { setModalContent, showModal, hideModal } = useModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
    getValues
  } = useForm<ProductPayload>({
    resolver: zodResolver(validators),
  })

  useEffect(() => {
    const record = Object.assign({}, currentRecord)

    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        if (value) {
          record[key] = getValues(key as any)
        }
      }
    }

    setModalContent(formModal(record))
  }, [errors])

  const handleDeleteConfirm = (e: any, id: any) => {
    mutateDelete(id)
  }

  const onSubmit = (id: number | undefined, data: ProductPayload) => {
    const categoryId = data.category_id.toString()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category_id', categoryId)
    formData.append('tag', data.tag)

    if (id) {
      data?.delete_images &&
        formData.append('delete_images', JSON.stringify(data?.delete_images))
      data?.delete_medias &&
        formData.append('delete_medias', JSON.stringify(data?.delete_medias))
    }

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

    id ? mutateUpdate({ data: formData, id }) : mutateCreate(formData)
    setCurrentRecord(null)
    reset()
    hideModal()
  }

  const actionButton = { text: 'New' }
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
        const imageUrl =
          record?.length > 0 &&
          record[0]?.url &&
          `${process.env.apiUrl}${record[0].url}`
        return record?.length > 0 ? (
          <Image
            src={imageUrl}
            alt="Image for Product"
            width={64}
            height={64}
          />
        ) : (
          '-'
        )
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      Cell: ({ cell }: { cell: any }) => {
        const createdAt = cell.getValue()
        return convertUTCToLocalTime(createdAt)
      },
    },
  ]

  const handleClose = () => {
    reset()
    setCurrentRecord(null)
    hideModal()
  }

  const deleteModal = (record: Product) => {
    const { id, name } = record

    return (
      <>
        <Box sx={{ display: 'block', justifyContent: 'center' }}>
          <Typography sx={{ mb: 2 }}>
            Are you sure you want to delete <strong>{name}</strong> ?
          </Typography>
          <div style={{ textAlign: 'right' }}>
            <Button variant="outlined" sx={{ mr: 2 }} onClick={hideModal}>
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
    )
  }

  const mapCategoriesOptions = () => {
    return categoriesData?.data?.map((category: any) => {
      return {
        value: category.id,
        label: category.name,
      }
    })
  }

  const formModal = (record?: any) => {
    const options = mapCategoriesOptions()
    const id = record?.id
    const formAction: string = id ? `Edit` : `Create`

    setValue('name', id ? record.name : '')
    setValue('category_id', id ? record.categoryId : '')
    setValue('description', id ? record.description : '')
    setValue('tag', id ? record.tag : '')

    return (
      <Box sx={{ maxHeight: '80vh', overflow: 'auto ' }}>
        <form
          onSubmit={handleSubmit(
            async (data) => {
              onSubmit(id, data)
            },
            (e) => console.log(e)
          )}
        >
          <Box sx={{ display: 'block', justifyContent: 'center' }}>
            <Typography sx={{ mb: 1 }} textAlign="center" variant="h6">
              {formAction}
            </Typography>
            <Select
              fieldName="category_id"
              labelName="Category"
              errors={errors}
              register={register}
              options={options}
              value={id ? record?.categoryId : ''}
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
            {id && (
              <GalleryFilesToDelete
                fieldName="delete_images"
                labelName="Delete Images"
                errors={errors}
                register={register}
                control={control}
                value={record.images}
              />
            )}
            <Input
              fieldName="images"
              labelName="Upload Images"
              errors={errors}
              register={register}
              type="file"
              multiple={true}
              control={control}
            />
            {id && (
              <GalleryFilesToDelete
                fieldName="delete_medias"
                labelName="Delete Medias"
                errors={errors}
                register={register}
                control={control}
                value={record.medias}
              />
            )}
            <Input
              fieldName="medias"
              labelName="Upload Medias"
              errors={errors}
              register={register}
              type="file"
              multiple={true}
              control={control}
            />
            <div style={{ textAlign: 'right' }}>
              <Button variant="outlined" sx={{ mr: 2 }} onClick={handleClose}>
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
        </form>
      </Box>
    )
  }

  const handleDelete = (record: any) => {
    setModalContent(deleteModal(record))
    showModal()
  }

  const handleCreate = () => {
    setModalContent(formModal())
    showModal()
  }

  const handleUpdate = (record: Product) => {
    setCurrentRecord(record)
    setModalContent(formModal(record))
    showModal()
  }

  const handlePagination = (meta: any) => {
    setPayload(meta)
  }

  return (
    <>
      <Table<Product>
        actionButton={actionButton}
        fields={fields}
        data={data as ProductsData}
        handleDelete={handleDelete}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
        handlePagination={handlePagination}
      />
    </>
  )
}

export default Products
