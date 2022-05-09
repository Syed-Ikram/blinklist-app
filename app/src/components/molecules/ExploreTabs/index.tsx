import  React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid,Link } from '@mui/material';

interface ExploreDataDetails{
  image:string;
  link:string;
}

const ExploreTabs = ()=> {
  const [exploreData,setExploreData]=useState([]);

  useEffect(()=>{
      fetch('http://localhost:8000/exploreIcons')
      .then(res =>res.json())
      .then(data => {
        setExploreData(data)})
  },[])
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const CategoryGrid=()=>{
    return(
      <Grid container spacing={1} sx={{ marginTop: "5px" }}>
      {exploreData.map((edata:ExploreDataDetails)=>(
        <Grid item xs={12} md={8} lg={4} >
          <Grid container >
            <Grid item>
              <img src={edata.image} alt=''/>
            </Grid>
            <Grid item>
              <Link sx={{marginLeft:1}} underline='none' href='#'>{edata.link}</Link>
            </Grid>
          </Grid>
        </Grid>
      )
      )}
      </Grid>
    )
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList sx={{"marginLeft":15}} onChange={handleChange} aria-label="lab API tabs example" textColor="primary" indicatorColor="primary">
            <Tab label="Explore by category" value="1" sx={{"width":350,}} />
            <Tab label="See recently added titles" value="2" sx={{"width":350}}/>
            <Tab label="See popular titles" value="3" sx={{"width":350}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{"marginLeft":15}}><CategoryGrid /></TabPanel>
        <TabPanel value="2" sx={{"marginLeft":15}}>Data 2</TabPanel>
        <TabPanel value="3" sx={{"marginLeft":15}}>Data 3</TabPanel>
      </TabContext>
    </Box>
  );
}

export default ExploreTabs;