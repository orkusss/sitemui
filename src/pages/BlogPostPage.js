import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import { styled } from '@mui/material/styles';

const CodeBlock = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100], 
    borderRadius: theme.shape.borderRadius,
    overflowX: 'auto',
    color: theme.palette.text.primary, 
        whiteSpace: 'pre-wrap', 
}));
function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Статья не найдена
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Автор: {post.author} | Дата: {post.date}
        </Typography>
          <CodeBlock>
        <Typography variant="body1">
          {post.content}
            </Typography>
              </CodeBlock>
      </Box>
    </Container>
  );
}

export default BlogPostPage;