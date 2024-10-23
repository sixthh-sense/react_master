import React from "react";
import "./css/styles.css";

export default function App() {

    const getData = () => {
        console.log("Function called");
    }

    return (
        <div className="App">
            <button onClick={() => getData()}>Get Data</button>
        </div>
    )
}