import {React, useState} from 'react';

function EventShowcase (props){

    const handleNameChange = (event) => {
        props.onNameChange(event.target.value);
    }

    return(
        <>
            <input value={props.name} onChange={handleNameChange} />
            {/* <button onClick={handleNameChange}>Send data to parent</button> */}
        </>
    )

}

export default EventShowcase;