import React from 'react';
const DemoComponent = (props) => {
    return(
        <div>
            <p>Demo Component</p>
            {props.children}
            <hr/>
            <h2>Value:- {props.value}</h2>
        </div>
    )
}
export default DemoComponent;