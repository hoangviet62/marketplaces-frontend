/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { styled, Typography } from '@mui/material'
import { useRouter } from 'next/router'

type Props = {
  name: string;
  path?: string;
  subItems?: {
    name: string;
    path: string;
  }[]
}

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  minWidth: 200,
  height: '100%',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
}))

const MenuContainer = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    minWidth: 300
  },
}))

const MenuPopupItems = (item: Props) => {
  const { name, path, subItems = [] } = item
  const Router = useRouter()

  const handleClick = (popupState: any, path: string) => {
    Router.push(path)
    popupState.close()
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState: any) => (
        <React.Fragment>
          <MenuButton variant="text" sx={{textTransform: 'inherit'}} {...path ? { onClick: () => Router.push(path) } : { ...bindTrigger(popupState) }}>
            {name}
          </MenuButton>
          <MenuContainer {...bindMenu(popupState)} sx={{ borderRadius: 0 }}>
            {subItems.map((subItem, index) => (
              <MenuItem
                key={index}
                onClick={() => handleClick(popupState, subItem.path)}
                sx={{height: 49}}
              >
                <Typography variant="h6">{subItem.name}</Typography>
              </MenuItem>
            ))}
          </MenuContainer>
        </React.Fragment>
      )}
    </PopupState>
  )
}

export default MenuPopupItems
