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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ my: 10, textAlign: 'center' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign="center"
        sx={{ mb: 5 }}
        color="primary"
      >
        Latest News
      </Typography>
      <ImageList
        gap={20}
        sx={{
          mb: 8,
          display: 'inline-flex'
        }}
        cols={isMobile ? 1 : 5}
      >
        {data &&
          data.map((item, index) => (
            <ImageListItem key={index}>
              <Image src={`${item.image}?w=400&fit=crop&auto=format`}
                alt="Image for category" height={300} width={400} />
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
