import React, { Component } from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Message from "../Message/Message";
import { withRouter } from "react-router";

class MessageMobile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Message />
        </div>
      </>
    );
  }
}

export default withRouter(MessageMobile);
