import * as React from 'react'
import { Box, styled, Typography } from '@mui/material'
import MediaCard from '@/components/Card'
import Carousel from '@/components/Carousel'
import useProducts from '@/hooks/Product/useProducts'
import {Product} from '@/interfaces/product'

const CustomWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: `0 0 0 100vmax ${theme.palette.common.white}`,
  clipPath: 'inset(0 -100vmax)',
}))

const Product = () => {
  const {data: products} = useProducts()
  const items = products?.data.map((item: Product) => ({
    image: `${process.env.apiUrl}${item.images[0].url}`,
    title: item.name,
    content: item.description
  }))

  return (
    <CustomWrapper>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ pt: 7, fontWeight: 'bold' }}
        color="primary"
      >
        Featured Products
      </Typography>
      <Carousel
        items={items}
        CardComponent={MediaCard}
        // callback={callback}
        itemsPerView={5}
      />
    </CustomWrapper>
  )
}

export default Product
