import Container from '@/components/Container'
import useCategories from '@/hooks/Category/useCategories'
import { Button, Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const AdminCategories: NextPage = () => {
  const { data } = useCategories()
  const router = useRouter()
  const handleClick = () => router.push('/admin/categories/create')
  return (
    <Container>
      <h1>AdminCategories</h1>
      <Button variant="contained" onClick={handleClick}>
        <Typography component="p">Add</Typography>
      </Button>
      <Typography component="p" sx={{ mt: 3 }}>
        Latest Category: {data && data[0]?.name}
      </Typography>
    </Container>
  )
}

export default AdminCategories
