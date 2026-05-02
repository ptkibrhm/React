import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';





const MUIAppBar = () => {
  const[anchorEl,setAnchorEl]=useState(null);
  const openMenu=(e)=>{
      setAnchorEl(e.currentTarget)
  }
  const openControl=anchorEl ? true : false;
  const closeControl=()=>{
    setAnchorEl(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar>

        <IconButton>
          <MenuIcon sx={{color:'#fff'}}/>
        </IconButton>

        <Typography variant='h6'>MUI</Typography>
        
         
        <Stack direction="row" sx={{marginLeft:'auto'}} >
            <Button sx={{color:'#fff'}} >Anasayfa</Button>
            <Button sx={{color:'#fff'}}>Hakkımızda</Button>
            <Button sx={{color:'#fff'}} onClick={openMenu}>Ürünler</Button>
            <Button sx={{color:'#fff'}}>İletişim</Button>
        </Stack>

        <Menu anchorEl={anchorEl} open={openControl} onClose={closeControl}>
          <MenuItem>Lastik</MenuItem>
          <MenuItem>Jant</MenuItem>
          <MenuItem>Aksesuar</MenuItem>

        </Menu>


      </Toolbar>

    </AppBar>
  )
}

export default MUIAppBar