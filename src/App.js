import React, {useState} from "react";
import "./css/styles.css";
import ListItem from "./components/ListItem";

export default function App() {
    const temp = [
        {id:1, pName: 'Apple', price:'$10'},
        {id:2, pName: 'Banana', price:'$5'},
        {id:3, pName: 'Grapes', price:'$7'},
        {id:4, pName: 'Orange', price:'$8'}
    ];
    const [products, setProducts] = useState(temp);

    let productList = (
        products.map((product, i) => {
            return (
                <ListItem key={product.id} pName={product.pName}/>
            )
        })
    );

    // whenever using the map() method, make sure the key attribute is "unique"
    // BEWARE: index is NOT a stable identity for every item
    return (
        <div className="App">
            {
                productList
            }
        </div>
    );
}