import { React, useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

//#region styling
const CustomButton = styled(Button)({
    backgroundColor: "grey",
})
//#endregion

function HTTPRequests() {
    const url = "dummyData.json"
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const getData = () => {
        fetch(url)
            .then(async response => {
                try {
                    const data = await response.json()
                    console.log('response data?', data)
                    setItems(data);
                } catch (error) {
                    console.log('Error happened here!')
                    setError(error);
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
                    console.log('Error happened here!')
                    setError(error);
                }
            })
    }

    const clear = () => {
        setError(null);
        setItems([]);
    }

    const showData = () => {
        clear();
        getData();
    }

    const makeError = () => {
        clear();
        makeIntentionalError();
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <CustomButton variant="contained" onClick={showData}>showData</CustomButton>
            <CustomButton variant="contained" onClick={makeError}>makeError</CustomButton>

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

            {error !== null &&
                <div>Error: {error.message}</div>
            }
        </Box>
    );
}

export default HTTPRequests;