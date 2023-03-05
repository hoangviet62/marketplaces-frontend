import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  Box,
  CardMedia,
  Grid,
  Typography,
  Chip,
  Button,
  useMediaQuery
} from '@mui/material';
import { Product } from '@/interfaces/product';
import QuantityButton from '../QuantityButton';

const ProductCard = ({product}: {product: Product}) => {
  const productImage = `${process.env.apiUrl}${product?.images[0].url}`
  const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', width: 1 }} component="div">
      <Grid container spacing={1}>
        <Grid item xs={isMobile ? 4 : 2}>
          <CardMedia
            image={productImage}
            component="img"
            sx={{ objectFit: 'contain', height: 150, width: 150 }}
          />
        </Grid>
        <Grid item xs={isMobile ? 8 : 5} textAlign="left" alignSelf="center">
          <Typography gutterBottom
            variant="h6"
            align="center"
            component="div"
            whiteSpace="normal"
            textAlign="left"
            color="primary">Supplier Name {product?.id}</Typography>
          <Typography
            variant="h5"
            align="center"
            component="div"
            whiteSpace="normal"
            textAlign="left"
            color="primary"
          >{product?.name}</Typography>
          <Box sx={{display: 'inline-flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
            <Chip label={<Typography variant="subtitle1" sx={{color: 'common.white'}}>{product?.tag}</Typography>} color="primary" />
            <Typography variant="subtitle1" color="primary">Extra Info 1</Typography>
            <Typography variant="subtitle1" color="primary">Extra Info 2</Typography>
          </Box>
        </Grid>
        <Grid item xs={isMobile ? 4 : 2} textAlign="center" alignSelf="center">
          <QuantityButton />
        </Grid>
        <Grid item xs={isMobile ? 8 : 3} textAlign="center" alignSelf="center" sx={{p: 2}}>
          <Button variant='contained' fullWidth>Add to Cart</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCard