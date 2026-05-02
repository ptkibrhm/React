import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const MUITooltip = () => {
  return (
    <div>
      <Tooltip title="silmek için tıklayınız">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MUITooltip;
