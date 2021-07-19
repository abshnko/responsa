import { React } from "react";
import { react } from "@babel/types";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/services" component={Services}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
