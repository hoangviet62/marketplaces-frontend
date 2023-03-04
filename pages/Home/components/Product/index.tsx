import * as React from 'react'
import { Box, styled, Typography } from '@mui/material'
import MediaCard from '@/components/Card'
import Carousel from '@/components/Carousel'
import useProducts from '@/hooks/Product/useProducts'
import { Product } from '@/interfaces/product'
import useCreateCartItem from '@/hooks/CartItem/useCreateCartItem'
import useUserCart from '@/hooks/Cart/useUserCart'

const CustomWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: `0 0 0 100vmax ${theme.palette.common.white}`,
  clipPath: 'inset(0 -100vmax)',
}))

const Product = () => {
  const { data: products } = useProducts()
  const { mutate } = useCreateCartItem()
  const { data } = useUserCart()

  const items = products?.data.map((item: Product) => ({
    id: item.id,
    image: `${process.env.apiUrl}${item.images[0].url}`,
    title: item.name,
    content: item.description,
  }))

  const handleClick = (id: number) => {
    const formData = new FormData()
    formData.append('product_id', id.toString())
    formData.append('cart_id', data.id)

    mutate(formData)
  }

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
        handleClickCallback={handleClick}
      />
    </CustomWrapper>
  )
}

export default Product
