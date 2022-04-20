import { Container, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../molecules/Footer';
import LibTabs from '../../organisms/LibTabs';
import theme from '../../Theme/theme';
import NavBar from '../../molecules/Navbar';

const LibPage=()=> {
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <Container maxWidth="md" sx={{"marginBottom":4}}>
        <Typography variant="h4" sx={{color:"#03314B","marginTop":3,"marginBottom":3}}>My Library</Typography>
        <LibTabs />
      </Container>
      <Footer />
    </ThemeProvider>
    );
}
export default LibPage;