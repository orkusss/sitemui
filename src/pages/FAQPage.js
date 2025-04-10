import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

const faqData = [
    {
        question: 'Что такое микроразметка?',
        answer: 'Микроразметка - это способ добавления структурированных данных в HTML-код веб-страниц, который помогает поисковым системам лучше понимать контент.',
    },
    {
        question: 'Зачем нужна микроразметка?',
        answer: 'Микроразметка улучшает SEO, позволяет создавать Rich Snippets и повышает CTR сайта.',
    },
    {
        question: 'Какие существуют форматы микроразметки?',
        answer: 'Основные форматы микроразметки: JSON-LD, Microdata и RDFa.',
    },
    {
        question: 'Какой формат микроразметки лучше?',
        answer: 'JSON-LD - рекомендуемый Google формат, он наиболее удобен для внедрения и поддержки.',
    },
    {
        question: 'Как проверить микроразметку на сайте?',
        answer: 'Используйте Google Rich Results Test или Schema Markup Validator.',
    },
];

function FAQPage() {
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
                    Часто задаваемые вопросы
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    Ответы на самые распространенные вопросы о микроразметке.
                </Typography>
            </Box>

            {faqData.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}

export default FAQPage;