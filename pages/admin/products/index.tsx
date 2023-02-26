import Container from '@/components/Container'
import { useModal } from '@/context/modal'
import useProducts from '@/hooks/Product/useProducts'
import useDeleteProduct from '@/hooks/Product/useDeleteProduct'
import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const AdminProducts: NextPage = () => {
  const { data } = useProducts()
  const { setModalContent, showModal, hideModal } = useModal()
  const { mutate } = useDeleteProduct()
  const router = useRouter()
  const handleClick = () => router.push('/admin/products/create')
  const handleUpdate = (e, id) => router.push(`/admin/products/${id}`)
  const handleDeleteConfirm = (e, id) => {
    mutate(id)
  }

  const renderSimpleModal = (id) => (
    <>
      <Typography component="p" align="center">
        Do you want to delete this product?
      </Typography>
      <Box sx={{ display: 'flex', mt: 3, justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          onClick={(e) => handleDeleteConfirm(e, id)}
          sx={{ mr: 3 }}
          color="error"
        >
          <Typography component="p">Delete</Typography>
        </Button>
        <Button
          variant="contained"
          onClick={(e) => hideModal()}
          sx={{ backgroundColor: (theme) => theme.palette.common.black }}
        >
          <Typography component="p">Cancel</Typography>
        </Button>
      </Box>
    </>
  )

  const handleDelete = (e, id) => {
    setModalContent(renderSimpleModal(id))
    showModal()
  }

  return (
    <Container>
      <h1>AdminProducts</h1>
      <Button variant="contained" onClick={handleClick}>
        <Typography component="p">Add</Typography>
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="p" sx={{ mt: 3, mr: 3 }}>
          Latest Product: {data && data[0]?.name}
        </Typography>
        {data && (
          <>
            <Button
              variant="contained"
              onClick={(e) => handleUpdate(e, data[0]?.ID)}
              sx={{ mr: 3 }}
            >
              <Typography component="p">Update</Typography>
            </Button>
            <Button
              variant="contained"
              onClick={(e) => handleDelete(e, data[0]?.ID)}
              color="error"
            >
              <Typography component="p">Delete</Typography>
            </Button>
          </>
        )}
      </Box>
    </Container>
  )
}

export default AdminProducts
