import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import "./styles/Style.css";

const App = () => (
  <Router>
    <div className="body">
      <NavTabs />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/discover" component={Discover} />
    </div>
  </Router>
);

export default App;
