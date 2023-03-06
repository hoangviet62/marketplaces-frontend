import Container from '@/components/Container'
import BreadCrumbs from '@/components/Breadcrumbs'
import {
  Box,
  Paper,
  Grid,
  MenuList,
  MenuItem,
  useTheme,
  Typography,
  Divider,
  styled,
  useMediaQuery,
} from '@mui/material'
import useCategories from '@/hooks/Category/useCategories'
import { useState } from 'react'
import { Category } from '@/interfaces/category'
import useProducts from '@/hooks/Product/useProducts'
import ProductCard from '@/components/Card/ProductCard'
import { Product } from '@/interfaces/product'

const CustomDivider = styled(Divider)(() => ({
  '& .MuiDivider-root': {
    mt: 0,
    mb: 0,
  },
}))

const Catalog = () => {
  const [pagination] = useState({ page: 1, perPage: 100 })
  const { data: categoryResponse } = useCategories(pagination)
  const { data: productsResponse } = useProducts(pagination)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const breadcrumbs = [
    {
      label: 'Catalog',
      href: '#',
      component: 'a',
      isActive: false,
    },
  ]

  return (
    <Container maxWidth={isMobile ? 'none' : 'xl'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BreadCrumbs items={breadcrumbs} />
        </Grid>
        {!isMobile && (
          <Grid item xs={isMobile ? 0 : 3}>
            <Box component={Paper} sx={{ borderRadius: 0 }}>
              <MenuList>
                <MenuItem sx={{ '&:hover': { background: 'none' } }}>
                  <Typography variant="h6">Categories</Typography>
                </MenuItem>
                <CustomDivider />
                {categoryResponse?.data.map((category: Category, index: number) => (
                  <MenuItem
                    key={index}
                    sx={{
                      '&:hover': {
                        background: theme.palette.primary.dark,
                        color: theme.palette.common.white,
                      },
                    }}
                  >
                    <Typography variant="subtitle2">{category.name}</Typography>
                  </MenuItem>
                ))}
              </MenuList>
            </Box>
          </Grid>
        )}
        <Grid item xs={isMobile ? 12 : 9}>
          <Box component={Paper} sx={{ borderRadius: 0 }}>
            <MenuList>
              <MenuItem sx={{ '&:hover': { background: 'none' } }}>
                <Typography variant="subtitle1">
                  Showing {productsResponse?.meta.totalItems} of{' '}
                  {productsResponse?.meta.totalItems}
                </Typography>
              </MenuItem>
              <CustomDivider />
              {productsResponse?.data.map((product: Product, idx: number) => (
                <Box key={idx}>
                  <MenuItem>
                    <ProductCard product={product} />
                  </MenuItem>
                  {idx + 1 < productsResponse?.data.length && <CustomDivider />}
                </Box>
              ))}
            </MenuList>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Catalog
