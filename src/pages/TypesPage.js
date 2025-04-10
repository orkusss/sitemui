import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const CodeBlock = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    overflowX: 'auto',
    color: theme.palette.text.primary,
    whiteSpace: 'pre-wrap',
}));

const typesData = [
    {
        name: 'Article',
        description: 'Статья, новостная статья или запись в блоге.',
        properties: ['headline', 'author', 'datePublished', 'articleBody'],
        link: 'https://schema.org/Article',
    },
    {
        name: 'Product',
        description: 'Информация о продукте, предлагаемом для продажи.',
        properties: ['name', 'description', 'image', 'brand', 'offers'],
        link: 'https://schema.org/Product',
    },
    {
        name: 'Event',
        description: 'Информация о событии.',
        properties: ['name', 'startDate', 'endDate', 'location', 'description'],
        link: 'https://schema.org/Event',
    },
    {
        name: 'Organization',
        description: 'Информация об организации, компании, учреждении и т.д.',
        properties: ['name', 'description', 'url', 'logo', 'address'],
        link: 'https://schema.org/Organization',
    },
    {
        name: 'Person',
        description: 'Информация о человеке.',
        properties: ['name', 'description', 'image', 'jobTitle', 'url'],
        link: 'https://schema.org/Person',
    },
      {
        name: 'Recipe',
        description: 'Рецепт блюда.',
        properties: ['name', 'description', 'image', 'recipeIngredient', 'recipeInstructions'],
        link: 'https://schema.org/Recipe',
    },
];

function TypesPage() {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
                    Типы микроразметки Schema.org
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    Обзор основных типов микроразметки, доступных в Schema.org, с примерами и ссылками на документацию.
                </Typography>
            </Box>

            <TableContainer component={Paper} sx={{ mt: 4 }}>
                <Table aria-label="Типы микроразметки Schema.org">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Тип</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Описание</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Основные свойства</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Подробнее</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {typesData.map((type) => (
                            <TableRow key={type.name}>
                                <TableCell component="th" scope="row">
                                    {type.name}
                                </TableCell>
                                <TableCell>{type.description}</TableCell>
                                <TableCell>
                                    {type.properties.map((property, index) => (
                                        <span key={index}>
                                            {property}
                                            {index < type.properties.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    <Link href={type.link} target="_blank" rel="noopener">
                                        Подробнее на Schema.org
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default TypesPage;