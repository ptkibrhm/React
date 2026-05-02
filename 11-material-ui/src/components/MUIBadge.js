import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const MUIBadge = () => {
  return (
    <div style={{marginTop:'100px', marginLeft:'100px'}}>
      <Badge badgeContent={12} color='primary' max={9}>
        <MailIcon color="action" />
      </Badge>
    </div>
  );
};

export default MUIBadge;
