import React from 'react'
import { styled } from "@mui/material/styles"
import { Typography } from '@mui/material'

const Text = styled(Typography)({
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#454545"
})

const Label = ({ text, small }) => {
    return (
        <Text style={small && { fontSize: "13px" }}>{text}</Text>
    )
}

export default Label