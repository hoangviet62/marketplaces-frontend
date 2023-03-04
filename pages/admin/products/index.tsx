import Container from '@/components/Container'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import ProductsContainer from '@/containers/Products'

const AdminProducts: NextPage = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>Products</Typography>
      <ProductsContainer />
    </Container >
  )
}

export default AdminProducts
