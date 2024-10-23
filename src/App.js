import PersonInfo from './components/PersonInfo';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonInfo name="Name1" age="34"/>
      <PersonInfo name="Name2" age="45"/>
      <PersonInfo name="Name3" age="23"/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
