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
                        + "Check the console for more information");
                }
            })
    }

    const clear = () => {
        setError("");
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

            {error !== "" &&
                <div>Error: {error}</div>
            }
        </Box>
    );
}

export default HTTPRequests;