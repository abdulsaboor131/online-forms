import { TextField } from '@mui/material'
import { styled } from "@mui/material/styles"
import React from 'react'

const InputField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        "&:hover": {
            border: "none"
        },
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    }
}))

const flexStyle = {

}


const Input = () => {
    return (
        <InputField size="small" />
    )
}

export default Input