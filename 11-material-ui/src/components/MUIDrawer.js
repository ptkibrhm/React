import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const MUIDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={()=>setIsOpen(true)}>Aç</Button>

      <Drawer open={isOpen} onClose={(e)=>setIsOpen(false)} anchor="right">
        <Box sx={{width:'300px', textAlign:'center'}}>
            <h1>Başla</h1>
            <p>lorem5</p>

        </Box>
      </Drawer>
     
    </div>
  );
};

export default MUIDrawer;
