import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardMedia from '@mui/material/CardMedia';


const CodeBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  overflowX: 'auto',
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
}));


const ButtonLink = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
const TinyList = styled(List)(({ theme }) => ({
  maxWidth: 400,
  bgcolor: theme.palette.background.paper,
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  [key: string]: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function HomePage() {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
          Внедрите микроразметку и улучшите видимость сайта
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Микроразметка позволяет поисковым системам лучше понимать контент вашего сайта, что приводит к улучшению SEO и Rich Snippets.
        </Typography>
        <CardMedia
            component="img"
            
            image="https://www.travelpayouts.com/blog/wp-content/uploads/2018/03/choose-new-niche-to-earn-money.png" 
            alt="Microdata Hero"
            sx={{ mt: 2,mb: 4, borderRadius: '4px' }} 
        />
        <Button variant="contained" color="primary" href="/about">
          Узнать больше
        </Button>
      </Box>

      
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Преимущества микроразметки
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Улучшенное SEO: повышение позиций в поисковой выдаче." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <RocketLaunchIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Rich Snippets: более привлекательное представление в результатах поиска." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CodeIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Более высокий CTR: привлечение большего количества посетителей на сайт." />
          </ListItem>
        </List>
      </Box>
       <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Json-LD" />
          <Tab label="Microdata" />
          <Tab label="RDFa" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <CodeBlock>
          {`
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Заголовок статьи",
            "description": "Описание статьи",
            "author": {
              "@type": "Person",
              "name": "Имя автора"
            },
            "datePublished": "2023-10-27"
          }
          </script>
          `}
        </CodeBlock>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
      <TabPanel value={value} index={2}>
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
      </TabPanel>
    </Box>
        <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Полезные ссылки
        </Typography>
             <TinyList>
      <ListItem disableGutters>
        <ButtonLink variant="outlined" color="primary" startIcon={<InsertLinkIcon />} href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">
         Rich Result Test
        </ButtonLink>
      </ListItem>
             <ListItem disableGutters>
               <ButtonLink variant="outlined" color="primary" startIcon={<InsertLinkIcon />} href="https://validator.schema.org/" target="_blank" rel="noopener">
                Schema Markup Validator
        </ButtonLink>
      </ListItem>
       </TinyList>
      </Box>
    </Container>
  );
}
export default HomePage;