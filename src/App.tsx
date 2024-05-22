import { useState } from 'react'
import { Alert, AppBar, Autocomplete, Avatar, Box, Button, Card, IconButton, Link, List, ListItem, Snackbar, TextField, Toolbar, Typography } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import { Close } from '@mui/icons-material';
import colorsList from './colors.json';
import './App.css'
import React from 'react';


function App() {
  const [alertState, setAlertState] = useState(false);
  const [textField, setTextField] = useState('');
  const [searchField, setSearchField] = useState('');
  const [colors, setColors] = useState(colorsList);

  const handleSearchChange = (value: string) => {
    const found = colors.find((el) => el == value);
    setSearchField(found ? found : 'nothing');
    setAlertState(true);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertState(false);
  };

  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="down" />;
  }

  const action = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: 7 }}
        TransitionComponent={SlideTransition}
        open={alertState}
        autoHideDuration={3000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="info"
          sx={{ width: '100%' }}>
          You have selected: "{searchField}"!
        </Alert>
      </Snackbar>

      <AppBar position="static">
        <Toolbar variant="dense" sx={{ gap: 5 }}>

          <Link
            variant="h6"
            underline='none'
            color='primary.contrastText'
            sx={{ cursor: 'pointer ' }}
            onClick={() => console.log('HOME')}>
            Home
          </Link>

          <Link
            variant="h6"
            underline='none'
            color='primary.contrastText'
            sx={{ cursor: 'pointer ' }}
            onClick={() => console.log('PAGE 1')}>
            Page 1
          </Link>

          <Link
            variant="h6"
            underline='none'
            color='primary.contrastText'
            sx={{ cursor: 'pointer ' }}
            onClick={() => console.log('PAGE 2')}>
            Page 2
          </Link>
          <Avatar sx={{ ml: 'auto' }} />

        </Toolbar>
      </AppBar>

      <Box className='container' width={'80vw'} sx={{ mt: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'grid ', gridTemplateColumns: 'repeat(2, 1fr)', gap: 5, padding: 15 }}>

          <TextField
            fullWidth
            id="color-input"
            variant="outlined"
            placeholder='Enter a color...'
            color='secondary'
            sx={{ backgroundColor: '#D9D9D9' }}
            onChange={(e) => setTextField(e.currentTarget.value)}
          />

          <Button
            variant='contained'
            onClick={() => setColors([
              textField,
              ...colors
            ])}
          >
            Add Color
          </Button>

          <Card variant='elevation' elevation={3} sx={{ padding: 3 }}>
            <List>
              {colors.map((color, i) => {
                return <ListItem key={i} color='textPrimary'>{color}</ListItem>
              })}
            </List>
          </Card>

          <Autocomplete
            options={colors}
            onChange={(e) => handleSearchChange(e.currentTarget.innerHTML)}
            renderInput={(params) => <TextField {...params} label='Color' />}
          />

        </Box>

        <Typography variant='h6' className="bottom-paragraph" color='textSecondary'>
          Search for your favorite color to select it.
        </Typography>

        <Button
          sx={{ width: 200, alignSelf: 'center', borderRadius: 50 }}
          color='secondary'
          variant='contained'
          onClick={() => setColors([
            ...colorsList
          ])}
        >
          Reset Colors
        </Button>
      </Box>
    </>
  )
}

export default App
