import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserProfile from './UserProfile';
import TaskManagement from './TaskManagement';

function BaseLayout(userDetails) {

    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='h-full w-full'>
      <div className='flex flex-col'>
        <div className='flex w-1/12 bg-blue-400'>
          <span className="text-white">{userDetails.username}</span>
          <img/>
        </div>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Modify User Profile" value="1" />
                <Tab label="Task Management" value="2" />
            </TabList>
        </Box>
        <TabPanel value="1"><UserProfile /></TabPanel>
        <TabPanel value="2"><TaskManagement /></TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

export default BaseLayout;
