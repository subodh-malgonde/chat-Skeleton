import React from "react";
import "./App.css";
import "./App-responsive.css";
import Navbar from "./components/Navbar/Navbar";
import MessageMobile from "./components/MessageMobile/MessageMobile";
import AdvisorDetailsMobile from "./components/AdvisorDetailsMobile/AdvisorDetailsMobile";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <Router>
          <Route path="/" component={Navbar} />
        </Router>

        <div className="container">
          <Router>
            <Route path="/" component={Layout} />
          </Router>
        </div>
      </div>
      <div className="mobile">
        <Router>
          <Switch>
            <Route exact path="/" component={MessageMobile} />
            <Route
              path="/AdvisorDetailsMobile"
              component={AdvisorDetailsMobile}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
