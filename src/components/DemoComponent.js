import React from 'react';
const DemoComponent = (props) => {
    return(
        <div>
            <p>Demo Component</p>
            {JSON.stringify(props)}
            <hr/>
            <h2>Value:- {props.value.toString()}</h2>
        </div>
    )
}
export default DemoComponent;