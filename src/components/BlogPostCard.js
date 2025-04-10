import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function BlogPostCard({ post }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
           </CardActionArea>
        <CardActions>
               <Button size="small" component={Link} to={`/blog/${post.id}`}>
                   Подробнее
               </Button>
        </CardActions>
    </Card>
  );
}

export default BlogPostCard;