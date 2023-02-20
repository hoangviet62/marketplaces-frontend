import * as React from 'react'
import { CategoryProps } from '@/interfaces/category-props'
import {
  Box,
  ImageList,
  Typography,
  ImageListItem,
  ImageListItemBar,
  useTheme,
  styled
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

const ImageListItemBarCustom = styled(ImageListItemBar)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
}));

const Category: React.FC<CategoryProps> = ({ data }) => {
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
        Categories
      </Typography>
      <ImageList
        gap={20}
        sx={{
          mb: 8,
          gridTemplateColumns: 'repeat(auto-fill, minmax(280fr, 1fr)!important',
        }}
        cols={isMobile ? 2 : 5}
      >
        {data.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.images[0]}?w=248&fit=crop&auto=format`}
              srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBarCustom
              title={<Typography sx={{ fontWeight: 'bold' }} variant="h6" color="primary">{item.name}</Typography>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Category
