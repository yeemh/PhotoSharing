import React, { Component } from "react";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Directory from "./components/Directory";
import Upload from "./components/Upload";
import Folder from "./components/Folder";
import './App.css';
import { Route, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/directory" component={Directory} />
          <Route path="/upload" component={Upload} />
          <Route path="/Folder" component={Folder} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
