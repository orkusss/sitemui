import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const CodeBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  overflowX: 'auto',
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
}));

const reasons = [
  'Вопрос по микроразметке',
  'Предложение о сотрудничестве',
  'Сообщить об ошибке',
  'Другое',
];

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Reason:', reason);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
    setReason('');
    setOpen(true);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'primary.main' }}>
          Связаться с нами
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
          Задайте свой вопрос или оставьте комментарий.
        </Typography>
      </Box>

      <Collapse in={open}>
        <Alert
          action={
            <Button color="inherit" size="small" onClick={() => setOpen(false)}>
              Закрыть
            </Button>
          }
        >
          Сообщение отправлено!
        </Alert>
      </Collapse>

      <Paper sx={{ padding: 3 }}>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Имя"
                variant="outlined"
                margin="normal"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={emailError}
                helperText={emailError ? 'Неверный формат email' : null}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="reason-label">Причина обращения</InputLabel>
                <Select
                  labelId="reason-label"
                  id="reason"
                  value={reason}
                  label="Причина обращения"
                  onChange={(e) => setReason(e.target.value)}
                  required
                >
                  {reasons.map((r) => (
                    <MenuItem key={r} value={r}>
                      {r}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Выберите причину обращения</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Сообщение"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ContactPage;