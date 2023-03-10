import * as React from 'react'
import { Box, Typography } from '@mui/material'
import MediaCard from '@/components/Card'
import Carousel from '@/components/Carousel'
import useProducts from '@/hooks/Product/useProducts'
import { Product } from '@/interfaces/product'
import useCreateCartItem from '@/hooks/CartItem/useCreateCartItem'
import useUserCart from '@/hooks/Cart/useUserCart'

const Product = () => {
  const { data: products } = useProducts()
  const { mutate } = useCreateCartItem()
  const { data } = useUserCart()

  const items = products?.data.map((item: Product) => ({
    id: item.id,
    image: item.images ? `${process.env.apiUrl}${item.images[0].url}` : '',
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
    <Box>
      <Typography
        gutterBottom
        variant="h4"
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
    </Box>
  )
}

export default Product
