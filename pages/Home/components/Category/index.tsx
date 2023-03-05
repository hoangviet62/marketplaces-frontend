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
  if (isMedium) numberToScale = 6
  if (isDesktop) numberToScale = 6

  return (
    <Box sx={{ pt: 5, pb: 5, background: theme.palette.common.white }}>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        textAlign="center"
        sx={{ mb: 5 }}
        color="primary"
      >
        Categories
      </Typography>
      {categories?.data && <ImageList
        gap={4}
        sx={{ mb: 8, display: 'grid' }}
        cols={numberToScale}
      >
        {categories.data.map((category: Category) => (
          <ImageListItem key={category.id} sx={{alignItems: 'center'}}>
            <Image src={`${process.env.apiUrl}${category.images[0].url}`}
              alt="Image for category"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: 130, height: 100 }}
              />
            <ImageListItemBarCustom
              title={
                <Typography
                  sx={{ fontWeight: 'bold', pl: 2, pr: 2 }}
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
