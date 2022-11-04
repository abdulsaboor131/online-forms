import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles"
import Label from './components/Label'
import InputDiv from './components/InputDiv'
import Input from './components/Input'
import SelectBox from './components/Select'

const EquipConditions = [
    { value: 0, text: "New" },
    { value: 1, text: "Used" },
]

const Form = styled("form")(({ theme }) => ({

}))

const Equipment = ({ value, index }) => {
    return (
        <Box
            hidden={value !== index}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ fontSize: "20px", borderBottom: "1px solid #b0b0b0" }}>Equipment Details</Typography>
                    <Form>
                        <InputDiv>
                            <Label text={"Vendor (Equipment Reseller)"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Contact Name"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Contact Number"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Contact Email"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Equipment Description"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Equipment Condition"} />
                            <SelectBox menuitems={EquipConditions} />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Total Equipment Invoice Value"} />
                            <Box display={"flex"} alignItems="center" gap="10px">
                                <Input />
                                <Typography>USD</Typography>
                            </Box>
                        </InputDiv>

                        <Box display="flex" gap="12px" alignItems="center">
                            <Checkbox />
                            <Typography>Click here if you have a quote or invoice to submit.</Typography>
                        </Box>
                    </Form>
                </Box >
            )}
        </Box >
    )
}

export default Equipment