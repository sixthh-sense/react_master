import "./css/styles.css";
import DemoComponent from "./components/DemoComponent";

export default function App() {

    const product = {
        pCode: 1001,
        pName: 'Apple'
    }

    return (
        <div className="App">
            <DemoComponent
                {...product}/>
        </div>
    )
}