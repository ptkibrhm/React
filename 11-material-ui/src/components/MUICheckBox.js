import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Button} from "@mui/material"



const MUICheckBox = () => {
    const [isConfirm,setIsConfirm]=useState(false);

    const submit=()=>{
        if(!isConfirm){
            alert("Lütfen kullanım koşullarını onaylayınız")
        }else{
            alert("Gönderim başarılı")
        }
    }
  return (
    <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Eğitim Durumunuz</FormLabel>
      <FormGroup>
        <FormControlLabel
          value="bottom"
          control={<Checkbox defaultChecked disabled/>}
          label="ilkokul"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
    

    <div>
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isConfirm} onChange={(e)=>setIsConfirm(e.target.checked)} />}
          label="Kullanım koşullarını kabul ediyorum."
          labelPlacement="end"
        />
        <Button onClick={submit} variant="contained">Gönder</Button>
      </FormGroup>
    </FormControl>
    </div>

    </div>



    
  )
}

export default MUICheckBox