import { Box, Tab, Tabs } from '@mui/material'
import {styled} from "@mui/material/styles"
import React from 'react'
import Topbar from './components/Topbar'
import Forms from './Forms'
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./theme"

const Container = styled(Box)({
  width:"100%",
  height:"100vh",
  overflowX:"hidden",
  overflowY:"scroll"
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