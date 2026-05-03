import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const MUISnackBar = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClick = () => {
    setOpenSnackBar(true);
  };

  const handleClose=()=>{
    setOpenSnackBar(false)
  }

  const action = (
    <>
      <Button onClick={handleClose} size="small" color="info">Kapat</Button>

      <IconButton onClick={handleClose} sx={{color:'white'}}>
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>SnackBar ı aç</Button>
      <Snackbar
        open={openSnackBar}
        message="Hata oluştu"
        action={action}
        autoHideDuration={3000} //3 sn sonra otomatik olarak onClose tetiklendi
        onClose={handleClose}
        anchorOrigin={{vertical:'bottom',horizontal:'right'}}
      />
    </div>
  );
};

export default MUISnackBar;
