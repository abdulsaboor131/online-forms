import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material/styles"
import InputDiv from './components/InputDiv'
import Label from './components/Label'
import Input from './components/Input'
import SelectBox from './components/Select'

const countries = [
    { value: 0, text: "Pakistan" },
    { value: 1, text: "India" },
    { value: 2, text: "Bangladesh" },
]
const times = [
    { value: 0, text: "0 to 8 months" },
    { value: 1, text: "9 to 24 months" },
    { value: 2, text: "more than 24 months" },
]


const Note = styled(Typography)({
    textAlign: "center",
    fontWeight: "700",
    fontSize: "18px",
    margin: "10px 0px",
    color: "grey",
    fontStyle: "italic"
})
const Form = styled("form")(({ theme }) => ({

}))


const Business = ({ value, index }) => {
    return (
        <Box
            hidden={value !== index}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Note>This is a secure application, all data collected will be held in a GDPR compliant environment.</Note>
                    <Form>
                        <InputDiv>
                            <Label text={"Applicant's Email address"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Applicant's Mobile Number"} />
                            <Input />
                        </InputDiv>
                        <Typography fontSize="18px" sx={{ borderBottom: "1px solid #b0b0b0", color: "#454545" }}>
                            Buisness Information
                        </Typography>
                        <InputDiv>
                            <Label text={"Full Legal Business Name"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"DBA Name (if applicable)"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Federal Tax ID "} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Business Phone Number"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Business Website"} />
                            <Input />
                        </InputDiv>
                        <Label text={"Address"} />
                        <InputDiv>
                            <Input />
                            <Label small text={"Street Address"} />
                        </InputDiv>
                        <InputDiv>
                            <Input />
                            <Label small text={"Address Line 2 "} />
                        </InputDiv>
                        <Box display="flex" gap="10px">
                            <InputDiv exS={{ flex: 1 }}>
                                <Input />
                                <Label small text={"City"} />
                            </InputDiv>
                            <InputDiv exS={{ flex: 1 }}>
                                <Input flex />
                                <Label small text={"State/Region/Province"} />
                            </InputDiv>
                        </Box>
                        <InputDiv>
                            <Label text={"Postal / Zip Code"} />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Country"} />
                            <SelectBox menuitems={countries} />
                        </InputDiv>
                        <InputDiv>
                            <Label text={"Time in Business"} />
                            <SelectBox menuitems={times} />
                        </InputDiv>
                    </Form>
                </Box>
            )}
        </Box>
    )
}

export default Business