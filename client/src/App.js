import React, { Component } from "react";
import "./App.css";

// using ES6 modules
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Saved from "./components/Saved";

// // using CommonJS modules
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;

class App extends Component {
  render() {
    return (
      <page>
        <Navbar></Navbar>

        <Jumbotron></Jumbotron>

        <Router>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Router>


      </page>
    );
  }
}

export default App;
