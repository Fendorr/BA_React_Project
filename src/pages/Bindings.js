import {React, useState} from 'react';
import PropsShowcase from '../components/PropsShowcase';
import EventShowcase from '../components/EventShowcase';
import SeperateBindingExample from '../components/SeperateBindingExample';


function Bindings(props) {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleNameChange = (name) => {
        setName(name);
    }

    return (
        <>
            <p>The two-way bound variable "name" is: {name}</p>
            <label htmlFor="TwoWayExample">value = name und onChange = handleChange(): </label>
            <input id="TwoWayExample" value={name} onChange={handleChange}/>
            <p>Binding in seperate component:</p>

            <SeperateBindingExample />

            <PropsShowcase name={name} />
            <EventShowcase name={props.name} onNameChange={handleNameChange} />
            <p>The name (set by the child) is: {name}</p>

        </>
    );
}

export default Bindings;
