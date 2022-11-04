import { Box, Typography } from '@mui/material'
import React from 'react'
import Input from './components/Input'
import InputDiv from './components/InputDiv'
import Label from './components/Label'
import { styled } from "@mui/material/styles"
import SelectBox from './components/Select'


const Form = styled("form")(({ theme }) => ({

}))

const countries = [
    { value: 0, text: "Pakistan" },
    { value: 1, text: "India" },
    { value: 2, text: "Bangladesh" },
]

const NamePrefixes = [
    { value: 0, text: "Mr" },
    { value: 1, text: "Mrs" },
    { value: 2, text: "Sr" },
    { value: 3, text: "Jr" },
]
const Positions = [
    { value: 0, text: "CFO" },
    { value: 1, text: "Manager" },
    { value: 2, text: "Vice President" },
    { value: 3, text: "Others" },
]

const Ownership = ({ value, index }) => {
    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography style={{ color: "#454545", fontSize: "20px", borderBottom: "1px solid #b0b0b0" }}>Business Ownership Details</Typography>
                    <Form>
                        <InputDiv>
                            <Label text={"Name"} />
                            <Box display="flex" gap="10px" marginTop="-20px" justifyContent={"space-between"}>
                                <InputDiv>
                                    <SelectBox menuitems={NamePrefixes} />
                                    <Label small text={"Prefix"} />
                                </InputDiv>
                                <InputDiv>
                                    <Input />
                                    <Label small text={"First"} />
                                </InputDiv>
                                <InputDiv>
                                    <Input />
                                    <Label small text={"Middle"} />
                                </InputDiv>
                                <InputDiv>
                                    <Input />
                                    <Label small text={"Last"} />
                                </InputDiv>
                            </Box>
                        </InputDiv>

                        <InputDiv>
                            <Label text="Position" />
                            <SelectBox menuitems={Positions} />
                        </InputDiv>
                        <InputDiv>
                            <Label text="Ownership %" />
                            <Input />
                        </InputDiv>
                        <InputDiv>
                            <Label text="Social Security Number" />
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
                                <Input />
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
                            <Label text={"Home Phone Number"} />
                            <Input />
                        </InputDiv>

                    </Form>
                </Box>
            )}
        </div>
    )
}

export default Ownership