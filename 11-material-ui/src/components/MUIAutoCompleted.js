import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./filmData";

const MUIAutoCompleted = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Filmler" />}
      />
    </div>
  );
};

export default MUIAutoCompleted;
