/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from '@/components/Table'
import Image from 'next/image'
import { convertUTCToLocalTime } from '@/utils/time'
import useBanners from '@/hooks/Banner/useBanners'
import useDeleteBanner from '@/hooks/Banner/useDeleteBanner'
import useCreateBanner from '@/hooks/Banner/useCreateBanner'
import useUpdateBanner from '@/hooks/Banner/useUpdateBanner'
import { Typography, Box, Button } from '@mui/material'
import { useModal } from '@/context/modal'
import { BannersData, Banner, BannerPayload } from '@/interfaces/banner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import validators from '@/validators/banner'
import Input from '@/components/Input'
import { useEffect, useState } from 'react'

const Banners = () => {
  const [payload, setPayload] = useState({page: 1, perPage: 10})
  const { data } = useBanners(payload)

  const { mutate: mutateDelete } = useDeleteBanner()
  const { mutate: mutateCreate } = useCreateBanner()
  const { mutate: mutateUpdate } = useUpdateBanner()
  const { setModalContent, showModal, hideModal } = useModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<BannerPayload>({
    resolver: zodResolver(validators),
  })

  useEffect(() => {
    setModalContent(formModal())
  }, [errors])

  const handleDeleteConfirm = (e: any, id: any) => {
    mutateDelete(id)
  }

  const onSubmit = (id: number | undefined, data: BannerPayload) => {
    const formData = new FormData()
    formData.append('description', data.description)
    formData.append('link_to', data.linkTo)

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
    hideModal()
  }

  const actionButton = { text: 'New' }
  const fields = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'description',
      header: 'Title',
    },
    {
      accessorKey: 'linkTo',
      header: 'Description',
    },
    {
      accessorKey: 'images',
      header: 'Image',
      Cell: ({ cell }: { cell: any }) => {
        const record = cell.getValue()
        const imageUrl = record?.length > 0 && record[0]?.url && `${process.env.apiUrl}${record[0].url}`
        return record?.length > 0 ? <Image src={imageUrl}
          alt="Image for banner"
          width={64}
          height={64} /> : "-"
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      Cell: ({ cell }: { cell: any }) => {
        const createdAt = cell.getValue()
        return convertUTCToLocalTime(createdAt)
      },
    }
  ]

  const deleteModal = (record: Banner
    ) => {
    const { id, description } = record

    return <>
      <Box sx={{ display: 'block', justifyContent: 'center' }}>
        <Typography sx={{ mb: 2 }}>
          Are you sure you want to delete <strong>{description || id}</strong> ?
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

  const formModal = (record?: any) => {
    const id = record?.id
    const formAction: string = id ? `Edit` : `Create`

    setValue("description", id ? record.description : "")
    setValue("linkTo", id ? record.linkTo : "")

    return <form onSubmit={handleSubmit(async (data) => { onSubmit(id, data) })}>
      <Box sx={{ display: 'block', justifyContent: 'center' }}>
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h6">{formAction}</Typography>
        <Input
          key={`description_${record?.id}`}
          fieldName="description"
          labelName="Title"
          errors={errors}
          register={register}
          type="text"
        />
        <Input
          key={`link_to_${record?.id}`}
          fieldName="linkTo"
          labelName="Description"
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

  const handleUpdate = (record: Banner) => {
    setModalContent(formModal(record))
    showModal()
  }

  const handlePagination = (meta: any) => {
    setPayload(meta)
  }

  return <>
    <Table<Banner>
      actionButton={actionButton}
      fields={fields}
      data={data as BannersData}
      handleDelete={handleDelete}
      handleCreate={handleCreate}
      handleUpdate={handleUpdate}
      handlePagination={handlePagination}
    />
  </>
}

export default Banners;