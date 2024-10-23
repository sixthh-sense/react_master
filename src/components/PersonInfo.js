import React from 'react';

function PersonInfo(props) {
    return (
        <div className="person">
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
        </div>
    )
}

export default PersonInfo;