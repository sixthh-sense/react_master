import React from 'react';
const DemoComponent = (props) => {
    return(
        <React.Fragment>
            <p>Demo Component</p>
            {props.children}
            <hr/>
            <h2>Value:- {props.value}</h2>
        </React.Fragment>
    )
}
export default DemoComponent;