import { Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Typography } from '@mui/material'
import { styled } from "@mui/material/styles"
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Container = styled((AppBar))({
    position: "fixed",
    height: "64px",
    top: "0px",
    padding: "0px 30px",
    zIndex: "99999"
})
const Logo = styled(("img"))({
    height: "40px",
    width: "100px",
    display: "inline-block",
})


const Topbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <Container>
            {/* <Sidebar open={Boolean(open)} setOpen={setOpen} /> */}
            <Box height="100%" display={"flex"} alignItems="center" justifyContent="space-between">
                <Box display="flex" gap="50px" alignItems={"center"}>
                    <IconButton onClick={() => setOpen(!open)}>
                        <Menu style={{ color: "white" }} />
                    </IconButton>
                    <Logo src="https://bifrost-bizfi-mgt-bizfi-ai-tech.s3.amazonaws.com/images/logo.png" />
                </Box>
                <Typography fontWeight="500" fontSize="18px">Welcome !</Typography>
            </Box>
        </Container >
    )
}

export default Topbar