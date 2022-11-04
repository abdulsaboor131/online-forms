import { Box, Tab, Tabs } from '@mui/material'
import {styled} from "@mui/material/styles"
import React from 'react'
import Topbar from './components/Topbar'
import Forms from './Forms'
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./theme"
import backgroundImage from "./assets/background.jpg"

const Container = styled(Box)({
  width:"100%",
  height:"100vh",
  overflowX:"none",
  overflowY:"scroll",
  background:`linear-gradient(to bottom, rgba(255,255,255, 0.52), rgba(62, 73, 98, 0.5)) ,url(${backgroundImage})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"fixed",
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Topbar/>
        <Forms/>
      </Container>
    </ThemeProvider>
  )
}

export default App