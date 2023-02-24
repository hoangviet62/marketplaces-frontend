import * as React from 'react'
import { CategoryProps } from '@/interfaces/category'
import {
  Box,
  ImageList,
  Typography,
  ImageListItem,
  ImageListItemBar,
  useTheme
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

const News: React.FC<CategoryProps> = ({ data }) => {
  const theme = useTheme()

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
        Latest News
      </Typography>
      <ImageList
        gap={20}
        sx={{
          mb: 8,
          gridTemplateColumns: 'repeat(auto-fill, minmax(280fr, 1fr)!important',
        }}
        cols={isMobile ? 1 : 3}
      >
        {data.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.images[0]}?w=248&fit=crop&auto=format`}
              srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={<Typography sx={{ fontWeight: 'bold' }} variant="h6" color="primary">{item.name}</Typography>}
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
