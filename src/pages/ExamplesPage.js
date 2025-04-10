import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const CodeBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
 backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100], 
  borderRadius: theme.shape.borderRadius,
  overflowX: 'auto',
  color: theme.palette.text.primary, 
  whiteSpace: 'pre-wrap', 
}));

function ExamplesPage() {
  return (
    <Container maxWidth="md">
      
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
          Примеры микроразметки
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Здесь вы найдете примеры микроразметки для различных типов контента и форматов.
        </Typography>
      </Box>

      
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Примеры JSON-LD
        </Typography>
        <CodeBlock>
          {`
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Заголовок статьи",
            "description": "Краткое описание статьи",
            "author": {
              "@type": "Person",
              "name": "Имя автора"
            },
            "datePublished": "2023-10-27"
          }
          </script>
          `}
        </CodeBlock>
        
      </Box>

     
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Примеры Microdata
        </Typography>
        <CodeBlock>
          {`
          <article itemscope itemtype="http://schema.org/Article">
            <h1 itemprop="headline">Заголовок статьи</h1>
            <p itemprop="description">Описание статьи</p>
            <span itemprop="author">Имя автора</span>
            <meta itemprop="datePublished" content="2023-10-27"/>
          </article>
          `}
        </CodeBlock>
      
      </Box>

    
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Примеры RDFa
        </Typography>
        <CodeBlock>
          {`
          <div vocab="https://schema.org/" typeof="Event">
            <span property="name">Название события</span>
            <span property="startDate" content="2023-11-15T19:00">15 ноября 2023 г., 19:00</span>
            <span property="location" typeof="Place">
              <span property="name">Место проведения</span>
            </span>
            <span property="description">Описание события</span>
          </div>
          `}
        </CodeBlock>
        
      </Box>
    </Container>
  );
}

export default ExamplesPage;