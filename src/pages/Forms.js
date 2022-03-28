import { React, useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

//#region styling
const CustomCard = styled(Card)({
    marginBottom: "15px",
    maxWidth: "50vh",
})

const CardDivider = styled(Divider)({
    marginTop: "15px",
    marginBottom: "15px",
})

const GridBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex",
    justifyContent: "center",
    gap: 2,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    }
}));

const FormButton = styled(Button)({
    backgroundColor: "grey",
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
        console.log("firstName:", event.target.firstName.value);
        console.log("lastName:", event.target.lastName.value);
        console.log("age:", event.target.age.value);
    }

    const resetForm = () => {
        setInputs({});
        setIsSubmitted(false);
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: "10px", alignSelf: "center" }}>React Forms Showcase</Typography>

            <GridBox>
                <CustomCard variant="outlined">
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>Form</Typography>
                        <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>Type something in the form and submit it</Typography>
                        <CardDivider />
                        <form id="example-form" onSubmit={handleSubmit}>
                            <div>
                                <TextField label="Firstname" name="firstName" type="text" variant="filled" value={inputs.firstName || ""} onChange={handleInputChange} margin="dense" fullWidth />
                            </div>
                            <div>
                                <TextField label="Lastname" name="lastName" type="text" variant="filled" value={inputs.lastName || ""} onChange={handleInputChange} margin="dense" fullWidth />
                            </div>
                            <div>
                                <TextField label="Age" name="age" type="number" variant="filled" value={inputs.age || ""} onChange={handleInputChange} margin="dense" fullWidth />
                            </div>
                            <br />
                            <p>The value of isSubmitted is: {isSubmitted.toString()}</p>
                            <FormButton type="submit" variant="contained">Submit</FormButton>
                        </form>
                    </CardContent>
                </CustomCard>

                {isSubmitted === true &&
                    <CustomCard variant="outlined">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Submitted values</Typography>
                            <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>this card will pop up after successfully submitting the form</Typography>
                            <CardDivider />
                            <p>firstName: {inputs.firstName}</p>
                            <p>lastName: {inputs.lastName}</p>
                            <p>age: {inputs.age}</p>
                            <FormButton variant="contained" onClick={resetForm}>reset</FormButton>
                            <CardDivider />
                            <h4>OBACHT!</h4>
                            <p>Resetting the form is usually done while submitting, so the submitted values cant be changed afterwards.</p>
                            <p>
                                Try changing them before resetting, to see the two-way binding between the input fields and the internal form
                                model. <br />
                                The need for an explicit reset is only implemented to showcase this behaviour.
                            </p>
                        </CardContent>
                    </CustomCard>
                }

            </GridBox>
        </Box>
    )
}

export default Forms;