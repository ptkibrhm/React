import React from 'react';
import Alert from '@mui/material/Alert';


const MUIAlert = () => {
  return (
    <div>
        <Alert sx={{width:'250px'}} severity='info'>Bilgilendirme</Alert>
        <Alert sx={{width:'250px'}} severity='error'>Bilgilendirme</Alert>

    </div>
  )
}

export default MUIAlert