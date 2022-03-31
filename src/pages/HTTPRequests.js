import { React, useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

//#region styling
const CustomButton = styled(Button)({
    color: "rgba(0,0,0,.87)",
    backgroundColor: "#fff",
    textTransform: "none",
    '&:hover': {
        backgroundColor: '#fff',
    }
})

const GridBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex",
    justifyContent: "center",
    gap: 2,
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    }
}));
//#endregion

function HTTPRequests() {
    const url = "dummyData.json"
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);

    const getData = () => {
        fetch(url)
            .then(async response => {
                try {
                    const data = await response.json()
                    console.log('response data?', data)
                    setItems(data);
                } catch (error) {
                    setError("Error happened where it shouldn`t!");
                }
            })
    }

    const makeIntentionalError = () => {
        const url = "not/a/real/url"
        fetch(url)
            .then(async response => {
                try {
                    const data = await response.json()
                    console.log('response data?', data)
                    setItems(data);
                } catch (error) {
                    setError("We tried to access /not/a/real/url which doesn`t exist, therefore the error is thrown. "
                        + "Check the console for more information.");
                }
            })
    }

    const resetData = () => {
        setError("");
        setItems([]);
    }

    const showData = () => {
        resetData();
        getData();
    }

    const makeError = () => {
        resetData();
        makeIntentionalError();
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: "10px", alignSelf: "center" }}>HTTP-Requests Showcase</Typography>
            <Typography variant="subtitle2" sx={{ alignSelf: "center" }}>Click the buttons to fetch data from public/dummyData.json</Typography>

            <GridBox>
                <CustomButton variant="contained" onClick={showData}>showData</CustomButton>
                <CustomButton variant="contained" onClick={makeError}>makeError</CustomButton>
            </GridBox>

            {items !== null &&
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <div>ID: {item.id} </div>
                            <div>Name: {item.name}</div>
                            <div>Age: {item.age}</div>
                            <div>Address: {item.address}</div>
                        </li>
                    ))}
                </ul>
            }

            {error !== "" &&
                <div>Error: {error}</div>
            }
        </Box>
    );
}

export default HTTPRequests;