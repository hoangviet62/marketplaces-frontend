import * as React from 'react'
import { Box, Menu, styled, Button, IconButton } from '@mui/material'
import customers from './customer.json'
import MenuItem from './MenuItem'

const MainMenu = styled(Box)(({ theme }) => ({
  height: 49,
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none',
    height: 0,
  },
}))

const MenuBar = () => {
  return (
    <MainMenu>
      {customers.map((menu, index) => (
        <MenuItem key={index} name={menu.name} subItems={menu.subItems} />
      ))}
    </MainMenu>
  )
}

export default MenuBar
