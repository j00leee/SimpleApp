//import logo from './logo.svg';
import "./App.css";
import Auth from "./components/auth";
import { Container } from '@material-ui/core';
import Signup from "./components/signup";
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>

    /*<div className="App">
       <ul className="navigation-menu">
        <li><a href="#root">Home</a></li>
        <li><a href="#projects-container">Projects</a></li>
  </ul>
      <Signin />
    </div>
    <div className="App">
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
