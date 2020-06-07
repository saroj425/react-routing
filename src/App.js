import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import Contact_us from "./Components/Contact/Contact-us";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact_us} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
