import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination'; 
import BlogPostCard from '../components/BlogPostCard';
import blogPosts from '../data/blogPosts';

const POSTS_PER_PAGE = 6; 

function BlogPage() {
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
          Блог о микроразметке
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Все о микроразметке, структурированных данных и SEO.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {displayedPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <BlogPostCard post={post} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(blogPosts.length / POSTS_PER_PAGE)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Container>
  );
}

export default BlogPage;