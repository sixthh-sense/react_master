import "./css/styles.css";
import DemoComponent from "./components/DemoComponent";

export default function App() {
    // props obj receives attributes as properties & content as a single property (ex) children
    return (
        <div className="App">
            <DemoComponent value={5}>
                <div>
                    <input type="text"/>
                </div>
            </DemoComponent>
        </div>
    )
}