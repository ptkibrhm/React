import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MUITextField = () => {
  return (
    <div>
      <div>
        <TextField label="isim" size="small"  variant="outlined" />
        <TextField label="isim" variant="filled" />
        <TextField label="isim" variant="standard" />
      </div>

      <div>
        <TextField label="isim" variant="outlined" color="success" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          variant="outlined"
          color="warning"
          helperText="isminizi giriniz"
        />
        <TextField
          label="şifre"
          variant="outlined"
          color="warning"
          helperText="şifrenizi kimseye göstermeyiniz"
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          disabled
          variant="outlined"
          color="warning"
          helperText="isminizi giriniz"
        />
        <TextField label="kimlik no" variant="outlined" color="warning" />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          InputProps={{ readOnly: true }}
          value="ibo"
          disabled
          variant="outlined"
          color="warning"
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
      </div>

        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            },
          }}
          variant="filled"
        />     

    </div>
  );
};

export default MUITextField;
