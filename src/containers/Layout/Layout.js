import React, { Component } from "react";
import "./style.css";
import "./responsive.css";
import Message from "../../components/Message/Message";
import AdvisorDetails from "../../components/AdvisorDetails/AdvisorDetails";

class Layout extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <AdvisorDetails />
        <Message />
      </div>
    );
  }
}

export default Layout;
