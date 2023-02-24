import Container from '@/components/Container'
import { useModal } from '@/context/modal'
import useCategories from '@/hooks/Category/useCategories'
import useDeleteCategory from '@/hooks/Category/useDeleteCategory'
import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const AdminCategories: NextPage = () => {
  const { data } = useCategories()
  const { setModalContent, showModal, hideModal } = useModal()
  const { mutate } = useDeleteCategory()
  const router = useRouter()
  const handleClick = () => router.push('/admin/categories/create')
  const handleUpdate = (e, id) => router.push(`/admin/categories/${id}`)
  const handleDeleteConfirm = (e, id) => {
    mutate(id)
  }

  const renderSimpleModal = (id) => (
    // <Container>
    <>
      <Typography component="p" align="center">
        Do you want to delete this category?
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
    // </Container>
  )

  const handleDelete = (e, id) => {
    setModalContent(renderSimpleModal(id))
    showModal()
  }

  return (
    <Container>
      <h1>AdminCategories</h1>
      <Button variant="contained" onClick={handleClick}>
        <Typography component="p">Add</Typography>
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="p" sx={{ mt: 3, mr: 3 }}>
          Latest Category: {data && data[0]?.name}
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

export default AdminCategories
