import { useUIContext } from '@/context/ui'
import {
  Box,
  Drawer,
  useTheme,
  Typography,
  Paper,
  Button,
  useMediaQuery,
  IconButton,
} from '@mui/material'
import CartItem from '@/components/CartMenu/CartItem'
import CloseIcon from '@mui/icons-material/Close'
import useUserCart from '@/hooks/Cart/useUserCart'

const CartMenu = () => {
  const theme = useTheme()
  const { showCart, setShowCart } = useUIContext()
  const { data } = useUserCart()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const renderCartItems = () => {
    return data?.cartItems?.map((item: unknown, index: number) => (
      <CartItem item={item} key={index} />
    ))
  }

  return (
    <Drawer
      open={showCart}
      anchor="right"
      onBackdropClick={() => setShowCart(false)}
      PaperProps={{
        sx: {
          width: matches ? '100%' : 500,
          borderRadius: 0,
          //   backgroundColor: theme.palette.grey,
        },
      }}
    >
      <Box
        sx={{ p: 4, height: '100%' }}
        display="flex"
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Box display="flex" width="100%" justifyContent={'flex-end'}>
          <Typography
            variant="h5"
            color="primary"
            textAlign={'center'}
            width="100%"
          >
            Your Cart
          </Typography>
          <IconButton
            color="error"
            onClick={() => setShowCart(false)}
            sx={{
              justifySelf: 'right',
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="body1" color="secondary" sx={{ mt: 3 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
          quos temporibus! Sequi iste vel vitae ducimus totam delectus ullam.
        </Typography>

        <Paper elevation={0} sx={{ mt: 2, width: ' 90%', padding: 4 }}>
          {data && renderCartItems()}
        </Paper>
        <Button sx={{ mt: 'auto', mb: 3 }} variant="contained">
          Checkout
        </Button>
      </Box>
    </Drawer>
  )
}

export default CartMenu
