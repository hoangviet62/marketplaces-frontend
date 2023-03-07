import * as React from 'react'
import { CategoryProps } from '@/interfaces/category'
import {
  Box,
  ImageList,
  Typography,
  ImageListItem,
  ImageListItemBar,
  useTheme,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

const News: React.FC<CategoryProps> = ({ data }) => {
  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  let numberToScale = 1
  if (isMedium) numberToScale = 3
  if (isDesktop) numberToScale = 3

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
        Latest News
      </Typography>
      <ImageList
        gap={4}
        sx={{ mb: 4, mr: 2, ml: 2, display: 'grid' }}
        cols={numberToScale}
      >
        {data &&
          data.map((item, index) => (
            <ImageListItem key={index} sx={{alignItems: 'center'}}>
              <Image src={`${item.image}?w=400&fit=crop&auto=format`}
                alt="Image for category"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 150, objectFit: 'contain' }}
              />
              <ImageListItemBar
                title={
                  <Typography
                    sx={{ fontWeight: 'bold' }}
                    variant="h6"
                    color="primary"
                  >
                    {item.title}
                  </Typography>
                }
                position="below"
                sx={{ textAlign: 'center' }}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  )
}

export default News
