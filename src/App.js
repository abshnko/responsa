import { React } from "react";
import { react } from "@babel/types";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home}></Route>
        <Switch></Switch>
      </Router>
    </>
  );
}

export default App;
