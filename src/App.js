import React, {useState} from "react";
import "./css/styles.css";

// lazy initialization
function initialState() {
    console.log("Expensive process: " + Date.now());
    return 0;
}

export default function App() {

    const [cnt, setCount] = useState(() => initialState());
    // on every re-render the useState(0 & initialState() is executed
    return (
        <div className="App">
            <h1>{cnt}</h1>
            <button onClick={() => setCount(cnt + 1)}>Increment</button>
        </div>
    );
}