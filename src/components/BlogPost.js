import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

function BlogPost({ post }) {
  return (
    <StyledPaper>
      <Typography variant="h5" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Автор: {post.author} | Дата: {post.date}
      </Typography>
      <Typography variant="body1">
        {post.content}
      </Typography>
    </StyledPaper>
  );
}

export default BlogPost;