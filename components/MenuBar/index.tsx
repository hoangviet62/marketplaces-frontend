import * as React from 'react'
import { Box, styled } from '@mui/material'
import customers from './customer.json'
import admins from './admin.json'
import MenuItem from './MenuItem'
import { useUser } from '@/hooks/useAuth'
import { User } from '@/enums'
import { MainMenu } from './types'
import Divider from '@mui/material/Divider';

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
  const { data } = useUser()
  let MenuData = customers

  if (data) {
    const { data: user} = data
    if (user.role === User.ADMIN) MenuData = admins
  }
  
  const isSignedIn = !isNaN(data?.data.id)

  return (
    <div>
      <MainMenu>
      <Divider component="div" role="presentation" variant="middle" sx={{borderWidth: 0.1, m: 0}}/>
        {MenuData.map((menu: MainMenu, index) => (
          <div key={`menu_${index}`} style={{display: 'contents'}}>
            <MenuItem
              name={menu.name}
              {...menu?.path ?  { path: menu?.path } : { subItems: menu.subItems }}
            />
            <Divider component="div" role="presentation" variant="middle" sx={{borderWidth: 0.1, m: 0}}/>
          </div>
        ))}
        <div style={{ marginLeft: 'auto' }}>
          {isSignedIn ? 
            <MenuItem
              key={'SignOut'}
              name={`Welcome, ${data?.data.username}`}
              path="/logout"
            /> : 
            <MenuItem
              key={'SignIn'}
              name="Sign In or Register"
              path="/login"
            />
            }
        </div>
      </MainMenu>
    </div>
  )
}

export default MenuBar
