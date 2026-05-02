import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';


const MUISelect = () => {
    const [currency,setCurrency]=useState("");
  return (
    <div>
        <FormControl size='small' sx={{width:'150px'}}>
            <InputLabel>Para birimi</InputLabel>
            <Select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </Select>

        </FormControl>
    </div>
  )
}

export default MUISelect