import { MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectBox = ({ menuitems }) => {
    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value={menuitems[0].value}
        >
            {menuitems.map((menu) => {
                return <MenuItem value={menu.value}>{menu.text}</MenuItem>
            })}
        </Select>
    )
}

export default SelectBox