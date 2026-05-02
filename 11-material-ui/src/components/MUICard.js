import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Car from  "../images/car.png"


const MUICard = () => {
  return (
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="car"
        height="140"
        image={Car}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BMW M3
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">satın al</Button>
        <Button size="small">iletişime geç</Button>
      </CardActions>
    </Card>
  )
}

export default MUICard