import {React} from 'react';

function PropsShowcase(props){
    
    return(
        <>
            <p>The name (set by the parent) is: {props.name}</p>
        </>
    )

}

export default PropsShowcase;