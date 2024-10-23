import React, {useState} from "react";
import "./css/styles.css";

export default function App() {
    const temp = ["Apple", "Banana", "Grapes", "Orange"];
    const [products, setProducts] = useState(temp);

    return (
        <div className="App">
            {
                products.map((product) => {
                    return (
                        <li>{product}</li>
                    )
                })
            }
        </div>
    );
}