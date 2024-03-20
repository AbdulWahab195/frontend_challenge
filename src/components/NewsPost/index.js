import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';

const NewsPost = ({
    item,
}) => {

  return (
    <Card sx={{ minHeight: '351px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.urlToImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='ellipsis-two-line'>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='ellipsis-three-line'>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default NewsPost;