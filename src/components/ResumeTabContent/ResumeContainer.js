import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Resume from './Resume'
import Technologies from './Technologies'
import Experience from './Experience'
import Education from './Education'

let w = window.innerWidth

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'scroll',
    flexGrow: 1,
    backgroundColor: 'rgba(0,0,0,0.50)',
    color: '#5DE6FF',
    borderTop: '2px solid #5DE6FF',
    borderBottom: '2px solid #5DE6FF',
    display: w > 1000 ? 'flex' : 'block',
    height: '50vh',
    top: '25%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div 
    className={classes.root}
    data-bottom-top="top:50%"
    data-top-bottom="top:0%"
    >
      <Tabs
        orientation= {w > 1000 ? "vertical" : "horizontal"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Technical Skills" {...a11yProps(0)} />
        <Tab label="Education" {...a11yProps(1)} />
        <Tab label="Experience" {...a11yProps(2)} />
        <Tab label="Download" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Technologies />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Education />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Resume />
      </TabPanel>
    </div>
  );
}