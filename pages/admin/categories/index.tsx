import Container from '@/components/Container'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import CategoriesContainer from '@/containers/Categories'

const AdminCategories: NextPage = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>Categories</Typography>
      <CategoriesContainer />
    </Container >
  )
}

export default AdminCategories
