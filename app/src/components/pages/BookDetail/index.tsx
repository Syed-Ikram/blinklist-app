/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, ThemeProvider, Typography, Grid, Link} from '@mui/material';
import React,{useState, useEffect} from 'react';
import Footer from '../../molecules/Footer';
import theme from '../../Theme/theme';
import NavBar from '../../molecules/Navbar';
import { useLocation} from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonComponent from '../../atoms/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
interface BookDetails{
  id:number;
  title:string;
  image:string;
  author:string;
  state:string;
  state2:string;
}

const BookDetailPage=()=> {
  const location = useLocation();
  const index:any = location.state;
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [book,setBook]=useState({});
  
    useEffect(()=>{
        fetch('http://localhost:8000/books/'+(index.id))
        .then(res =>res.json())
        .then((data:BookDetails) => {
                setBook(data)
            }
            )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  var thisBook:any = book;
  var bookState = thisBook.state;
  const handleReadNow = ()=>{
    bookState = "Finished"

    fetch('http://localhost:8000/books/'+(index.id),{
      method: 'PATCH',
      body: JSON.stringify({
        "state": bookState,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }
  const handleFinisedReading = ()=>{
    bookState = "Read Again"

    fetch('http://localhost:8000/books/'+(index.id),{
      method: 'PATCH',
      body: JSON.stringify({
        "state": bookState,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <Container maxWidth="md" sx={{"marginBottom":4,marginTop:3}}>
        <Typography variant='body1'>Get the key ideas from  </Typography>
        <Grid container sx={{marginTop:3}}>
          <Grid item xs={8}>
            <Typography sx={{'fontWeight':'bold'}} variant="h4" >
              {thisBook.title}
            </Typography>
            <Typography sx={{marginTop:2}} variant="h6" >
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant="body1" color="text.secondary" align="left" sx={{"marginTop":2}}>
              {thisBook.author}
            </Typography>
            <Typography variant="body1" color="text.secondary" align="left" sx={{"marginTop":2}}>
              <Grid container>
                <Grid item>
                  <AccessTimeIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                      13-minute read
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
            <ButtonComponent sx={{marginRight:1,marginTop:8,borderColor:'#6D787E'}} onClick={handleReadNow} size='large' variant='outlined' color="secondary">
              <Link href='/' underline="none">Read now</Link>
            </ButtonComponent>
            <ButtonComponent sx={{marginRight:1,marginTop:8}} variant='contained' onClick={handleFinisedReading} size='large' color="secondary">
              <Link href='/' underline="none">Finished Reading</Link>
            </ButtonComponent>
            <ButtonComponent sx={{marginRight:1,marginTop:8,color:'#6D787E'}} variant='text' size='large' color="secondary">
              Send to Kindle <ArrowForwardIcon />
            </ButtonComponent>
          </Grid>
          <Grid item xs={4}>
            <img src={thisBook.image} alt='pic not found'/>
          </Grid>
        </Grid>
      <Box sx={{ width: '63%', typography: 'body1' ,marginTop:2}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary">
              <Tab label="Synopsis" value="1" sx={{"width":150}}/>
              <Tab label="Who is it for?" value="2" sx={{"width":150}}/>
              <Tab label="About the author" value="3" sx={{"width":150}}/>
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography variant='body2'>
              Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
            </Typography>
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
      </Container>
      <Footer />
    </ThemeProvider>
    );
}
export default BookDetailPage;