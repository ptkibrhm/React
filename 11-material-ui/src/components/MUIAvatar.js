import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const MUIAvatar = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/26.jpg" />
        <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/4.jpg" />
        <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/53.jpg" />
      </Stack>
    </div>
  );
};

export default MUIAvatar;
