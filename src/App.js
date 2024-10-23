import React, {useState} from "react";
import "./css/styles.css";

export default function App() {

    const [i, setCount] = useState(0);

    const addValue = () => {
        setCount(i + 1);
    }

    const decrementValue = () => {
        setCount(i - 1);
    }

    const changeCounter = (op) => {
        if (op === '+') {
            setCount(i + 1);
        } else if (op === '-') {
            setCount(i - 1);
        }
    }

    return (
        <div className="App">
            <h1>{i}</h1>
            <button onClick={addValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
        </div>
    );
}