import { Box, Drawer, Stack, SwipeableDrawer, Typography } from '@mui/material'
import { styled } from "@mui/material/styles"
import React from 'react'
import { theme } from '../theme'

const Container = styled(Box)({
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "65px",
    // backgroundColor: "#76839fc1",
    color: "black",
})

const Sidebar = ({ open, setOpen }) => {
    return (
        <Drawer
            variant='persistent'
            open={open}
            anchor="left"
            style={{ zIndex: "-999" }}
        >
            <Container sx={{ width: "300px" }}>
                <Box >
                    <img height="80px" width="170px" src="https://bifrost-bizfi-mgt-bizfi-ai-tech.s3.amazonaws.com/images/companies/sciaps-logo.png" />
                    <Typography mt={2}>4003 Brook Rd,</Typography>
                    <Typography>Lancaster, Ohio 43130</Typography>
                    <Typography><span style={{ fontWeight: "600" }}>Office:</span> 740-756-4345</Typography>
                    <Typography>sciaps.com</Typography>
                    <Typography fontSize="18px" fontWeight="600">Contact</Typography>
                    <Typography>Tim Johnson</Typography>
                    <Typography>785-230-6910</Typography>
                    <Typography mb={2}>tjohnson@sciaps.com</Typography>
                    <img height="80px" width="170px" src="https://bifrost-bizfi-mgt-bizfi-ai-tech.s3.amazonaws.com/images/companies/sciaps-contact-logo.png" />
                </Box>
            </Container>
        </Drawer>
    )
}

export default Sidebar