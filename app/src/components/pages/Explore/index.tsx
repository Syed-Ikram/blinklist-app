import { Container, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../molecules/Footer';
import theme from '../../Theme/theme';
import NavBar from '../../molecules/Navbar';
import ExploreBanner from '../../molecules/ExploreBanner';
import RenderBooks from '../../organisms/RenderBooks';
import SearchField from '../../organisms/SearchField';

const ExplorePage=()=> {
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <Container maxWidth="md" sx={{"marginBottom":4}}>
        <ExploreBanner />
        <SearchField />
        <Typography variant="h6" sx={{color:"#03314B","marginBottom":3,fontWeight:'bold'}}>Trending blinks</Typography>
        <RenderBooks state="All" state2='Trending blinks' />
        <Typography variant="h6" sx={{color:"#03314B","marginTop":3,"marginBottom":3,fontWeight:'bold'}}>Just added</Typography>
        <RenderBooks state="All" state2='Just added' />
        <Typography variant="h6" sx={{color:"#03314B","marginTop":3,"marginBottom":3,fontWeight:'bold'}}>Featured audio blinks</Typography>
        <RenderBooks state="All" state2='Featured audio blinks' />
      </Container>
      <Footer />
    </ThemeProvider>
    );
}
export default ExplorePage;