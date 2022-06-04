import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

//#region img-imports
import doggo1 from "../images/doggo1.webp";
import doggo2 from "../images/doggo2.webp";
import doggo3 from "../images/doggo3.webp";
import doggo4 from "../images/doggo4.webp";
import doggo5 from "../images/doggo5.webp";
import robbenbaby1 from "../images/robbenbaby1.webp";
import robbenbaby2 from "../images/robbenbaby2.webp";
import robbenbaby4 from "../images/robbenbaby4.webp";
//#endregion

//#region styling
const CustomGrid = styled(Grid)({
    paddingTop: "20px",
});

const ResponsiveImg = styled('img')({
    display: "flex",
    width: "100%",
    height: "100%",
});

//#endregion

function GridExample() {

    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>Dynamic columns and grid showcase</Typography>
            <Typography variant="subtitle1">Resize the window to see the React-MUI grid in action</Typography>
            <CustomGrid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    {text}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {text}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {text}
                </Grid>
            </CustomGrid>

            <CustomGrid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <ResponsiveImg src={doggo1} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <ResponsiveImg src={robbenbaby1} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Grid container direction="column" style={{height: "100%"}}>
                        <Grid item sm={6} paddingBottom={2}>
                            <ResponsiveImg  src={doggo2}/>
                        </Grid>
                        <Grid item sm={6}>
                            <ResponsiveImg  src={robbenbaby4} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ResponsiveImg src={doggo5} />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <ResponsiveImg src={doggo4} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <ResponsiveImg src={robbenbaby2} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <ResponsiveImg src={doggo3} />
                </Grid>
            </CustomGrid>
        </Box>
    );
}

export default GridExample;
