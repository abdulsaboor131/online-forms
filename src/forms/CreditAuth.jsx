import { Box, Checkbox, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { styled } from "@mui/material/styles"
import Label from './components/Label'
import Input from './components/Input'
import InputDiv from './components/InputDiv'
import SignaturePad from 'react-signature-canvas'
import "./styles/index.css"
const Form = styled("form")(({ theme }) => ({

}))

const CreditAuth = ({ value, index }) => {
    const sigCanvas = useRef({})
    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography color="#454545" fontSize="20px" my={3} sx={{ borderBottom: "1px solid #b0b0b0" }}>
                        Credit Authorization
                    </Typography>
                    <Form>
                        <Label text="Declaration" />
                        <Typography style={{ color: "#666", maxHeight: "100px", overflowY: "auto", borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", border: "1px solid #c0c0c0", fontSize: "13px", padding: "10px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet tempore quia suscipit porro quaerat nostrum explicabo in laboriosam at voluptates enim, sint cum quos maxime? Minima nesciunt corrupti at dolor, ducimus voluptates adipisci? Culpa quasi expedita similique asperiores, cupiditate voluptates illum, amet nihil a tenetur voluptate fugit nemo necessitatibus quia dolores architecto cum! Totam eius accusantium nihil facere voluptates at nesciunt enim tempora exercitationem amet corrupti eum ipsum recusandae sapiente, non optio distinctio blanditiis sed reprehenderit voluptate culpa? Accusantium omnis non iste dignissimos eos aperiam ratione modi numquam atque culpa consectetur nisi quo voluptatem sit assumenda, quas itaque autem
                        </Typography>

                        <Box display="flex" alignItems={"flex-start"} gap="6px" marginY={"16px"}>
                            <Checkbox />
                            <Typography fontSize="15px" color="#424242" fontWeight="500" textAlign="justify">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque perferendis vitae soluta voluptatem ab quo totam corporis provident, nulla atque vel, assumenda possimus sint optio. Eligendi, suscipit eos tempore odio repellat distinctio culpa expedita quod accusantium natus beatae minus temporibus omnis modi at sed minima eius maxime illo asperiores? Molestias quos at ratione error earum possimus eos ex fugit deserunt commodi nulla placeat tenetur libero doloremque qui praesentium vero minima similique debitis, necessitatibus nisi dicta, quibusdam explicabo. Soluta aperiam expedita labore consequuntur sed, accusamus consectetur cumque autem unde similique veniam adipisci magnam quos atque quis quod eaque quasi perferendis at mollitia. Voluptate minima deleniti culpa perferendis laborum, rem error ab totam debitis laboriosam. Voluptatibus iusto est saepe quasi possimus architecto odio cum ipsam quis ad consectetur delectus optio, natus quaerat consequatur aliquid dolor et voluptatem temporibus officia aspernatur fuga! Accusamus enim illum fugit illo quos eligendi, ducimus explicabo quam nemo, tempora rerum qui voluptatem odio veritatis minus repudiandae delectus dignissimos perspiciatis eos id in aliquam deleniti. Deleniti, beatae, dolorum vel cumque impedit sequi nobis ea atque, amet eius harum error dicta dolores animi et sunt incidunt suscipit quaerat repellat itaque! Modi tempore quos animi expedita corporis error laboriosam voluptates hic.
                            </Typography>
                        </Box>

                        {/* Signature Canvas */}
                        <Label text="Signature" />
                        <SignaturePad minDistance={0} ref={sigCanvas} penColor="#000"
                            canvasProps={{ className: "sig-canvas" }} />
                        <InputDiv>
                            <Label text={"Feel free to add any further information about your submission that may be helpful."} />
                            <Input />
                        </InputDiv>
                    </Form>
                </Box>
            )
            }
        </div >
    )
}

export default CreditAuth