import { React, useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//#region styling
const CustomCard = styled(Card)({
    marginBottom: "15px",
})

const CardDivider = styled(Divider)({
    marginTop: "15px",
    marginBottom: "15px",
})
//#endregion

function Forms() {
    const [inputs, setInputs] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        setIsSubmitted(true);
        event.preventDefault();
        alert(inputs);
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: "10px", alignSelf: "center" }}>React Forms Showcase</Typography>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
            }}>
                <CustomCard variant="outlined">
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>Form</Typography>
                        <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>Type something in the form and submit it</Typography>
                        <CardDivider />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <TextField label="Firstname" type="text" variant="filled" value={inputs.firstName} onChange={handleInputChange} margin="dense" fullWidth />
                            </div>
                            <div>
                                <TextField label="Lastname" type="text" variant="filled" value={inputs.lastName} onChange={handleInputChange} margin="dense" fullWidth />
                            </div>
                            <div>
                                <TextField label="Age" type="number" variant="filled" value={inputs.age} onChange={handleInputChange} margin="dense" fullWidth />
                            </div>
                            <input type="submit" />
                        </form>
                        <p>The value of isSubmitted is: {isSubmitted.toString()}</p>
                    </CardContent>
                </CustomCard>

                {isSubmitted == true &&
                    <CustomCard variant="outlined">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Form</Typography>
                            <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>Type something in the form and submit it</Typography>
                            <CardDivider />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <TextField label="Firstname" type="text" variant="filled" value={inputs.firstName} onChange={handleInputChange} margin="dense" fullWidth />
                                </div>
                                <div>
                                    <TextField label="Lastname" type="text" variant="filled" value={inputs.lastName} onChange={handleInputChange} margin="dense" fullWidth />
                                </div>
                                <div>
                                    <TextField label="Age" type="number" variant="filled" value={inputs.age} onChange={handleInputChange} margin="dense" fullWidth />
                                </div>
                                <input type="submit" />
                            </form>
                            <p>The value of isSubmitted is: {isSubmitted.toString()}</p>
                        </CardContent>
                    </CustomCard>
                }
            </Box>
        </Box>

    )
}

export default Forms;