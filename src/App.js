import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./components/Content";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Router>
        <Navbar className="navbar-wrapper" />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <Content className="content-wrapper" />
    </div>
  );
}

export default App;
