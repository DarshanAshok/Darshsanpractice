import * as React from 'react';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { MyBasic } from '../basicselectprops/MyBasic.com';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
import { MyAvtar } from '../avtar/MyAvtar.com';
import { MyAlert } from '../alerts/MyAlert.com';
import { MySnackbar } from '../snackbar/MySnackbar.com';
import { MySpeeddial } from '../speeddial/MySpeeddial.com';
import { MySwitch } from '../switch/MySwitch.com'
import { MyToggle } from '../Toggle/MyToggle.com';
import { MyCardss } from '../card/MyCardss.com';
import { MyDrawer } from '../drawer/MyDrawer.com';
import { MyStepper } from '../stepper/MyStepper.com';
import { MyPagination } from '../pagination/MyPagination.com';
import { MyPopper } from '../popper/MyPopper.com';
import { MyFragment } from '../fragment/MyFragment.com';
import { MyUseStateHook } from '../hook/MyUseStateHook.com';
import { MyHooks } from '../hooks/MyHooks.com';
import { MyOptionhooks } from '../optionhooks/MyOptionhook.com';
import { MyNative } from '../nativeprops/MyNative.com';
export let MyTabs:React.FC<{}>=()=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
console.log("newValue",typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="props" value="1" />
            <Tab label="Elemetnts" value="2" />
            <Tab label="mui elemts" value="3" />
            <Tab label="fragment" value="4" />
            <Tab label="hookes" value="5" />
          </TabList>
        </Box>
        
        <h1>Def of Props:</h1>
        <p>In React, the term props stands for properties, which refers to the properties of an object. This is because all elements created in React are JavaScript objects. 
          As a result, passing data into a component is done by creating properties and values for the object.</p>
        1.<TabPanel value="1"><MyProps/></TabPanel>
        2.Basic<MyBasic/> <br />
        <TabPanel value="2"><H1/></TabPanel>
        3.Native<MyNative/>
        <TabPanel value="3">

1.Buttons<MyButton/> <br />
2.Ratings<MyRatings/> <br />
3. Avatar<MyAvtar/> <br />
4.Alert<MyAlert/> <br />
5.Snackbar<MySnackbar/> <br />
6.speeddial<MySpeeddial/> <br />
7.Switch<MySwitch/> <br />
8.Toggle<MyToggle/> <br />
9.Cards<MyCardss/> <br />
10.Drawer<MyDrawer/> <br />
11.Stepper<MyStepper/> <br />
12.Pagination<MyPagination/> <br />
13.popper<MyPopper/> <br />
        </TabPanel>

        <TabPanel value="4">
          <MyFragment/>
        </TabPanel>
        <TabPanel value="5">
<h1>Def of hooks</h1>
<p>React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.</p>
1.Hooks<MyHooks/> <br />
2.Optionhooks<MyOptionhooks/> <br />
<MyUseStateHook/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}