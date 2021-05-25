import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <Content />
    </div>
  );
}

export default App;
