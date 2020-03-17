import React, { Component } from "react";
import "./style.css";
import AdvisorDetails from "../AdvisorDetails/AdvisorDetails";
import { withRouter } from "react-router";

class AdvisorDetailsMobile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <AdvisorDetails />
        </div>
      </>
    );
  }
}

export default withRouter(AdvisorDetailsMobile);
