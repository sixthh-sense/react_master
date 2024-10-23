import React, {useState} from "react";
import "./css/styles.css";

export default function App() {
    const temp = ["Apple", "Banana", "Grapes", "Orange"];
    const [products, setProducts] = useState(temp);

    // whenever using the map() method, make sure the key attribute is "unique"
    return (
        <div className="App">
            {
                products.map((product, i) => {
                    return (
                        <li key={i.toString()}>{product}</li>
                    )
                })
            }
        </div>
    );
}