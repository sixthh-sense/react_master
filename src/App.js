import "./css/styles.css";
import DemoComponent from "./components/DemoComponent";

export default function App() {
    // no value given to attribute props? defaults to "true"
    // needs to be stringified to be shown
   return (
       <div className="App">
           <DemoComponent value/>
       </div>
   )
}