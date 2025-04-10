import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Divider from '@mui/material/Divider';

const ButtonLink = styled(Link)(({ theme }) => ({
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const CodeBlock = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    overflowX: 'auto',
    color: theme.palette.text.primary,
    whiteSpace: 'pre-wrap',
}));

const toolsData = {
    'Проверка и валидация': [
        {
            name: 'Google Rich Results Test',
            url: 'https://search.google.com/test/rich-results',
            description: 'Проверка отображения Rich Snippets в Google.',
        },
        {
            name: 'Schema Markup Validator',
            url: 'https://validator.schema.org/',
            description: 'Валидация микроразметки Schema.org.',
        },
        {
            name: 'Yandex Structured Data Validator',
            url: 'https://webmaster.yandex.ru/tools/microtest/',
            description: 'Инструмент для проверки структурированных данных от Яндекса.',
        },
    ],
    'Генераторы микроразметки': [
        {
            name: 'Merkle SEO Schema Generator',
            url: 'https://technicalseo.com/tools/schema-markup-generator/',
            description: 'Генератор Schema.org микроразметки различных типов.',
        },
        {
            name: 'Rank Ranger Schema Markup Generator',
            url: 'https://www.rankranger.com/free-seo-tools/schema-markup-generator',
            description: 'Бесплатный генератор микроразметки от Rank Ranger.',
        },
    ],
    'Другие полезные инструменты': [
        {
            name: 'Google Tag Manager',
            url: 'https://tagmanager.google.com/',
            description: 'Система управления тегами, полезная для внедрения микроразметки.',
        },
    ],
};

function ToolsPage() {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
                    Инструменты для микроразметки
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    Список полезных инструментов для создания, тестирования и валидации микроразметки.
                </Typography>
            </Box>

            {Object.entries(toolsData).map(([category, tools]) => (
                <Box key={category} sx={{ mb: 4 }}>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                        {category}
                    </Typography>
                    <List>
                        {tools.map((tool) => (
                            <ListItem key={tool.name} disablePadding>
                                <ListItemButton component={Link} href={tool.url} target="_blank" rel="noopener">
                                    <ListItemText primary={tool.name} secondary={tool.description} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            ))}
        </Container>
    );
}

export default ToolsPage;