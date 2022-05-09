import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RenderBooks from '../RenderBooks';

const LibTabs = ()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary">
            <Tab label="Currently Reading" value="1" />
            <Tab label="Finished" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><RenderBooks  state='Finished' state2='Any'/></TabPanel>
        <TabPanel value="2"><RenderBooks  state='Read Again' state2='Any'/></TabPanel>
      </TabContext>
    </Box>
  );
}

export default LibTabs;