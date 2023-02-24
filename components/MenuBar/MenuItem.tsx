import * as React from 'react';
import Button, { ButtonTypeMap } from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material';
import { useRouter } from 'next/router'

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  minWidth: 200,
  height: '100%',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  }
}));

const MenuContainer = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    borderRadius: 0
  }
}));

const MenuPopupItems = (item: { name: string, subItems: { name: string, path: string }[] }) => {
  const Router = useRouter();

  const handleClick = (popupState: any, path: string) => {
    Router.push(path)
    popupState.close();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState: any) => (
        <React.Fragment>
          <MenuButton variant="text" {...bindTrigger(popupState)}>
            {item.name}
          </MenuButton>
          <MenuContainer {...bindMenu(popupState)} sx={{ borderRadius: 0 }}>
            {item?.subItems.map((subItem) => <MenuItem onClick={() => handleClick(popupState, subItem.path)}>{subItem.name}</MenuItem>)}
          </MenuContainer>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuPopupItems
