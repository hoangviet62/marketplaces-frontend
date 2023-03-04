import * as React from 'react'
import { Category } from '@/interfaces/category'
import {
  Box,
  ImageList,
  Typography,
  ImageListItem,
  ImageListItemBar,
  useTheme,
  styled,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import useCategories from '@/hooks/Category/useCategories'

const ImageListItemBarCustom = styled(ImageListItemBar)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textAlign: 'center',
}))

const Category = () => {
  const theme = useTheme()
  const {data: categories} = useCategories()
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  let numberToScale = 2
  if (isMedium) numberToScale = 4
  if (isDesktop) numberToScale = 6

  return (
    <Box sx={{ my: 10 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ mb: 5 }}
        color="primary"
      >
        Categories
      </Typography>
      {categories?.data && <ImageList
        gap={8}
        sx={{ mb: 8 }}
        cols={numberToScale}
      >
        {categories.data.map((category: Category) => (
          <ImageListItem key={category.id} sx={{alignItems: 'center'}}>
            <Image src={`${process.env.apiUrl}${category.images[0].url}`}
              alt="Image for category"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: 210, height: 148 }}
              />
            <ImageListItemBarCustom
              title={
                <Typography
                  sx={{ fontWeight: 'bold' }}
                  variant="subtitle1"
                  whiteSpace="normal"
                  color="primary"
                  component="div"
                >
                  {category.name}
                </Typography>
              }
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>}
    </Box>
  )
}

export default Category
