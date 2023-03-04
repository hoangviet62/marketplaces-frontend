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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

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
        gap={20}
        sx={{ mb: 8 }}
        cols={isMobile ? 2 : 5}
      >
        {categories.data.map((category: Category) => (
            <ImageListItem key={category.id}>
              <Image src={`${process.env.apiUrl}${category.images[0].url}`}
                alt="Image for category"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 148 }}
                />
              <ImageListItemBarCustom
                title={
                  <Typography
                    sx={{ fontWeight: 'bold' }}
                    variant="h6"
                    color="primary"
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
