/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Avatar,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material'

import { Delete } from '@mui/icons-material'
import useDeleteCartItem from '@/hooks/CartItem/useDeleteCartItem'

const CartItem = ({ item }: any) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const { mutate } = useDeleteCartItem()

  return (
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        // justifyContent={'space-between'}
      >
        <Avatar
          src={`${process.env.apiUrl}${
            item.product?.images ? item.product?.images[0]?.url : ''
          }`}
          sx={{ width: 96, height: 96, mr: 2 }}
        />
        <Box display="flex" flexDirection={'column'}>
          <Typography variant="h6">{item.product.name}</Typography>
          {!matches && (
            <Typography variant="subtitle2">
              {item.product.description}
            </Typography>
          )}
          {item.product.price && <Typography variant="subtitle2">${item.price}</Typography>}
          <Typography variant="subtitle2">Quantity: {item.quantity}</Typography>
        </Box>
        <IconButton
          sx={{
            alignSelf: 'center',
            marginLeft: 'auto'
          }}
          color="error"
          onClick={() => mutate(item.id)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Box>
      {matches && (
        <Typography sx={{ textAlign: 'center', mb:2 }} variant="subtitle2">
          {item.product.description}
        </Typography>
      )}
      <Divider variant="inset" />
    </Box>
  )
}

export default CartItem
