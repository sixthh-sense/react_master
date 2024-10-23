import "./App.css";
import React, {useState} from "react";

export default function App() {

    // if u wanna make react watch something changing, u have to make it a 'state' variable(just variables doesn't show changes)
    // useState() always returns one array with two elements
    // the array's 2nd element: function which is going to change the value of the 1st element
    const [i, setCount] = useState(0);// 1. value which we have given of the state(Number, Boolean, String, Array, Object literal etc...)
    const addValue=() => {
        setCount(i + 1);
        console.log(i);
    }

    return (
        <div className="App">
            <h1>{i}</h1>
            <button onClick={addValue}>Increment</button>
        </div>
    );
}