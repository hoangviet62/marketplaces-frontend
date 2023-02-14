import * as React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { CarouselProps } from '@/interfaces/carousel-props'
import MediaCard from '@/components/Card'
import Carousel from '@/components/Carousel'

const CustomWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  boxShadow: `0 0 0 100vmax ${theme.palette.primary.dark}`,
  clipPath: 'inset(0 -100vmax)',
}))

const Product: React.FC<CarouselProps> = ({ items, callback }) => {
  return (
    <CustomWrapper>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ pt: 10 }}
      >
        Featured Products
      </Typography>
      <Carousel
        items={items}
        CardComponent={MediaCard}
        callback={callback}
        itemsPerView={3}
      />
    </CustomWrapper>
  )
}

export default Product
