import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const MUIDialog = () => {

    const[diologOpen,setDiologOpen]=useState(false);

  return (
    <div>
      <Button onClick={()=>setDiologOpen(true)}>Dialog</Button>
      <Dialog open={diologOpen} onClose={()=>setDiologOpen(false)}> {/* onClose= herhangi bir yere bastığında kapanacak */}
        <DialogTitle>Soru</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dünyadının en iyi futbolcusu Lionel Messi midir?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button >Evet</Button>
          <Button >Hayır</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MUIDialog;
