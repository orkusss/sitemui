import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import Paper from '@mui/material/Paper';

const CodeBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  overflowX: 'auto',
}));

function AboutPage() {
  return (
    <Container maxWidth="md">
      
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
          Что такое микроразметка?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Узнайте, как микроразметка может улучшить видимость вашего сайта в поисковых системах.
        </Typography>
      </Box>
      <Divider/>
     
       <Box sx={{ mt: 8, mb: 4}}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Что такое микроразметка?
        </Typography>

        <div style={{ position: 'relative', paddingTop: '56.25%'  }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://vk.com/video_ext.php?oid=-210418537&id=456239018&hash=23c68a06e5bc5a60"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            title="VK Video"
          />
        </div>

        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Микроразметка — это способ добавления структурированных данных в HTML-код веб-страниц. Она помогает поисковым системам, социальным сетям и другим приложениям лучше понимать содержимое страницы и использовать эту информацию для улучшения результатов поиска, отображения сниппетов и интеграции с другими сервисами.
        </Typography>
      </Box>
      <Divider/>
      
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Преимущества использования микроразметки
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Улучшение SEO и повышение видимости в поисковых системах." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Более привлекательные сниппеты в результатах поиска (Rich Snippets)." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Улучшение интеграции с социальными сетями." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Более точное понимание контента страницы различными приложениями." />
          </ListItem>
        </List>
      </Box>
       <Divider/>
     
        <Box sx={{ mt: 8, mb: 4}}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Как работает микроразметка?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Микроразметка использует специальные атрибуты HTML-тегов для описания данных на странице. Эти атрибуты определяют тип контента (например, статья, продукт, событие) и его свойства (например, заголовок, описание, цена).
        </Typography>
      </Box>
       <Divider/>
     
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Стандарты микроразметки
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
              <ListItemButton component={Link} href="https://schema.org/" target="_blank" rel="noopener">
            <ListItemText primary="Schema.org - Самый популярный и рекомендуемый стандарт, поддерживаемый Google, Bing, Yahoo! и Yandex." />
             </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
                 <ListItemButton component={Link} href="https://ogp.me/" target="_blank" rel="noopener">
            <ListItemText primary="Open Graph - Используется для управления отображением контента в социальных сетях, таких как Facebook." />
             </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
               <ListItemButton component={Link} href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary" target="_blank" rel="noopener">
            <ListItemText primary="Twitter Cards - Аналогичен Open Graph, но используется для управления отображением контента в Twitter." />
      </ListItemButton>
          </ListItem>
        </List>
      </Box>
       <Divider/>
     
       <Box sx={{ mt: 8, mb: 4}}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Как добавить микроразметку на свой сайт?
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Добавление микроразметки на сайт может быть выполнено вручную путем добавления специальных атрибутов к HTML-тегам или с помощью специальных плагинов и инструментов.
        </Typography>
      </Box>
       <Divider/>
            
       <Box sx={{ mt: 8, mb: 4}}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Валидация микроразметки
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
            После добавления микроразметки на сайт важно проверить ее правильность с помощью специальных инструментов, таких как:
        </Typography>
               <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
              <ListItemButton component={Link} href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">
            <ListItemText primary="Rich Results Test - Инструмент от Google для проверки Rich Snippets." />
             </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
                 <ListItemButton component={Link} href="https://validator.schema.org/" target="_blank" rel="noopener">
            <ListItemText primary="Schema Markup Validator - Инструмент для проверки Schema.org микроразметки." />
             </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default AboutPage;