import Container from '@/components/Container'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import BannerContainer from '@/containers/Banner'

const AdminBanners: NextPage = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>Banner</Typography>
      <BannerContainer />
    </Container >
  )
}

export default AdminBanners
