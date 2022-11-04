import { Stack } from '@mui/material'
import React from 'react'

const InputDiv = ({ children, exS }) => {
    return (
        <Stack my={3} style={exS}>
            {children}
        </Stack>
    )
}

export default InputDiv