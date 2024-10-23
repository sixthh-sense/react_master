import React, {useState} from "react";
import "./css/styles.css";

export default function App() {

    const [i, setCount] = useState(0);

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
            <button onClick={() => changeCounter('+')}>Increment</button>
            <button onClick={() => changeCounter('-')}>Decrement</button>
        </div>
    );
}