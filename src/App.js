import React from "react";
import "./css/styles.css";

export default function App() {

    // e: synthetic event (wrapper around the native browser event object && passed to every function automatically) // doesn't need to be passed
    const getData = (e) => {
        console.log(e.target.innerHTML);
        // e.target: button 요소가 나옴(Content of HTML)
        // e.target.innerHTML: 요소 사이에 있는 내용
    }

    return (
        <div className="App">
            <div onClick={getData}>
                <h1>Test</h1>
                Get Data
            </div>
        </div>
    )
}