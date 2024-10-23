import React , {useState} from "react";
import "./css/styles.css";

export default function App() {

    const [header, setHeader] = useState('Default');

    // e: synthetic event (wrapper around the native browser event object && passed to every function automatically) // doesn't need to be passed
    const getData = (e) => {
        setHeader(e.target.value);
        // 한 자씩 칠 때마다 적은 값이 콘솔창에 찍힘
        console.log(e.target.value);
    }

    return (
        <div className="App">
            <h1>Test</h1>
            <input onChange={getData} type="text"/>
        </div>
    )
}