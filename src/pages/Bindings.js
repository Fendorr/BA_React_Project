import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import PropsShowcase from '../components/PropsShowcase';
import EventShowcase from '../components/EventShowcase';
import SeperateBindingExample from '../components/SeperateBindingExample';
import { blueGrey, grey } from '@mui/material/colors';

//#region styling
const CustomCard = styled(Card)({
    marginBottom: "15px",
})

const CardDivider = styled(Divider)({
    marginTop: "15px",
    marginBottom: "15px",
})
//#endregion

function Bindings(props) {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleNameChange = (name) => {
        setName(name);
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <CustomCard variant="outlined">
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Two-way Binding</Typography>
                    <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>showcases usage of a two-way bound "name"-property</Typography>
                    <CardDivider />
                    <p>The two-way bound variable "name" is: {name}</p>
                    <label htmlFor="TwoWayExample">value = name und onChange = handleChange(): </label>
                    <input id="TwoWayExample" value={name} onChange={handleChange} />
                </CardContent>
            </CustomCard>

            <CustomCard variant="outlined">
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Binding in seperate component</Typography>
                    <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>showcases usage of same "name"-property in seperate component</Typography>
                    <CardDivider />
                    <SeperateBindingExample />
                </CardContent>
            </CustomCard>

            <CustomCard variant="outlined">
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Send data from parent to child</Typography>
                    <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>showcases communication between components props</Typography>
                    <CardDivider />
                    <PropsShowcase name={name} />
                </CardContent>
            </CustomCard>

            <CustomCard variant="outlined">
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Send data from child to parent</Typography>
                    <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>showcases communication between components using custom events and props</Typography>
                    <CardDivider />
                    <EventShowcase name={props.name} onNameChange={handleNameChange} />
                    <p>The name (set by the child) is: {name}</p>
                </CardContent>
            </CustomCard>
        </Box>
    );
}

export default Bindings;
