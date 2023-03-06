import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  CardMedia,
  Grid,
  Typography,
  Chip,
  Button,
  useMediaQuery,
} from '@mui/material'
import QuantityButton from '../QuantityButton'
import useCreateCartItem from '@/hooks/CartItem/useCreateCartItem'
import useUserCart from '@/hooks/Cart/useUserCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Product } from '@/interfaces/product'

const ProductCard = ({ product }: { product: Product }) => {
  const productImage = `${process.env.apiUrl}${product?.images[0].url}`
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [quantity, setQuantity] = React.useState(1)
  const { data } = useUserCart()
  const { mutate } = useCreateCartItem()

  const handleQuantityClick = (q: number) => {
    setQuantity(q)
  }

  const addToCart = () => {
    const formData = new FormData()
    formData.append('product_id', product.id.toString())
    formData.append('cart_id', data.id)
    formData.append('quantity', quantity.toString())

    mutate(formData)
  }

  const desktopView = () => {
    return <Grid container spacing={1} alignItems="center">
      <Grid item xs={2} sx={{ height: 1 }}>
        <CardMedia
          image={productImage}
          component="img"
          sx={{ objectFit: 'contain', height: 150, width: '100%' }}
        />
      </Grid>
      <Grid item xs={5} textAlign="left" alignSelf="center" sx={{ height: 1, display: 'flex' }}>
        <div style={{ alignSelf: 'center', width: '100%' }}>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            component="div"
            whiteSpace="normal"
            textAlign="left"
            color="primary"
          >
            Supplier Name {product?.id}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            component="div"
            whiteSpace="normal"
            textAlign="left"
            color="primary"
          >
            {product?.name}
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              width: '90%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Chip
              label={
                <Typography variant="caption" sx={{ color: 'common.white' }}>
                  {product?.tag}
                </Typography>
              }
              color="primary"
            />
            <Typography variant="caption" color="primary">
              Extra Info 1
            </Typography>
            <Typography variant="caption" color="primary">
              Extra Info 2
            </Typography>
          </Box>
        </div>
      </Grid>
      <Grid item xs={2} textAlign="center" alignSelf="center" sx={{ height: 1, display: 'flex' }}>
        <div style={{ alignSelf: 'center' }}><QuantityButton callback={handleQuantityClick} /></div>
      </Grid>
      <Grid
        item
        xs={3}
        textAlign="center"
        alignSelf="center"
        sx={{ height: 1, display: 'flex' }}
      >
        <div style={{ alignSelf: 'center', width: '100%' }}>
          <Button
            variant="contained"
            sx={{ borderRadius: 0 }}
            fullWidth
            onClick={addToCart}
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </div>
      </Grid>
    </Grid>
  }

  const mobileView = () => {
    return <Grid container spacing={1}>
      <Grid item xs={5} sx={{ height: 1 }}>
        <CardMedia
          image={productImage}
          component="img"
          sx={{ objectFit: 'contain', height: 150, width: '100%' }}
        />
      </Grid>
      <Grid item xs={7}>
        <Typography
          gutterBottom
          variant="h6"
          align="center"
          component="div"
          whiteSpace="normal"
          textAlign="left"
          color="primary"
        >
          Supplier Name {product?.id}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="div"
          whiteSpace="normal"
          textAlign="left"
          color="primary"
        >
          {product?.name}
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            width: '90%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Chip
            label={
              <Typography variant="caption" sx={{ color: 'common.white' }}>
                {product?.tag}
              </Typography>
            }
            color="primary"
          />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <QuantityButton callback={handleQuantityClick} />
      </Grid>
      <Grid item xs={7}>
        <Button
          variant="contained"
          sx={{ borderRadius: 0 }}
          fullWidth
          onClick={addToCart}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  }

  return (
    <Box sx={{ width: 1 }} component="div" >
      {isMobile ? mobileView() : desktopView()}
    </Box >
  )
}

export default ProductCard
