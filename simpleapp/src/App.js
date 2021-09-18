import logo from './logo.svg';
import "./App.css";
import Signin from "./components//signin.js";

function App() {
  return (

    <div className="App">
      {/* <ul className="navigation-menu">
        <li><a href="#root">Home</a></li>
        <li><a href="#projects-container">Projects</a></li>
  </ul> */}
      <Signin />
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="signin.js">signin</a>
      </header>
    </div> */

  );
}

export default App;
