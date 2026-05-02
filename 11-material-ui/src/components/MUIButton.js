import React from 'react'
import {Button} from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const MUIButton = () => {
  return (
    <div>
        <div style={{marginBottom:'50px'}}>
            <Button variant='text'>Kaydol</Button>
            <Button variant='contained'>Kaydol</Button>
            <Button variant='outlined'>Kaydol</Button>
        </div>

        {/* default olarak  primary*/}
        <div style={{marginBottom:'50px'}}>
            <Button color='primary'>Giriş yap</Button>
            <Button color='error'>Giriş yap</Button>
            <Button color='info'>Giriş yap</Button>
            <Button color='secondary'>Giriş yap</Button>
        </div>

        <div style={{marginBottom:'50px'}}>
            <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
            <Button size='medium' variant='contained' color='warning'>Geri Dön</Button>
            <Button size='large' variant='contained' color='warning'>Geri Dön</Button>
        </div>

        <div style={{marginBottom:'50px'}}>
            <Button size='small' variant='contained' color='warning' startIcon={<AddCircleIcon />}>Geri Dön</Button>
            <Button size='small' variant='contained' color='warning' endIcon={<AddCircleIcon />}>Geri Dön</Button>
        </div>

        <div>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>


    </div>
  )
}

export default MUIButton