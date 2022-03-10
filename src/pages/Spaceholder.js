import {React, useState} from 'react';


function BindingExample() {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <>
            <p>The name is: {name}</p>
            <input value={name} onChange={handleChange}/>
        </>
    );
}

export default BindingExample;
