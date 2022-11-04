import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Business from './forms/Business';
import Equipment from './forms/Equipment';
import Ownership from './forms/Ownership';
import CreditAuth from './forms/CreditAuth';
import {styled} from "@mui/material/styles"


const Container = styled(Box)(({theme})=>({
  [theme.breakpoints.down("md")]:{
    width:"100%"
  }
  }))
const Form = styled(Box)(({theme})=>({
  backgroundColor:"white",
  width:"750px",
  margin:"90px auto 40px auto",
  padding:"20px",
  borderRadius:"10px",
  // boxShadow: "inset 0 0 2000px rgba(62, 73, 98,.3)"
  boxShadow: "0px 0px 5px 5px rgba(62, 73, 98,.3)",
  [theme.breakpoints.down("md")]:{
    width:"auto"
  }
  }))
const Heading = styled(Typography)({
    textAlign:"center",
    fontWeight:"700",
    fontSize:"24px",
    margin:"20px 0px",
    color:"#454545"
  })

  

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const styleTab = styled(Tab)({
  fontWeight:"600"
})

export default function Forms() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Form>
      <Heading>Online Applications</Heading>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} TabIndicatorProps={{sx:{display:{xs:"none",md:"block"}}}} sx={{'& .MuiTabs-flexContainer':{flexWrap:{xs:"wrap",md:"nowrap"},justifyContent:"center"}}} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{fontWeight:"600"}} label="Business Details" {...a11yProps(0)} />
          <Tab style={{fontWeight:"600"}} label="Equipment Details" {...a11yProps(1)} />
          <Tab style={{fontWeight:"600"}} label="Ownership Details" {...a11yProps(2)} />
          <Tab style={{fontWeight:"600"}} label="Credit Authorization" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Business value={value} index={0} />
      <Equipment value={value} index={1} />
      <Ownership value={value} index={2} />
      <CreditAuth value={value} index={3} />
      </Form>
    </Container>
  );
}
