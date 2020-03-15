import React from "react";
import "./style.css";
import "./responsive.css";
import attachfileIcon from "../../assets/image/attachfileIcon.svg";
import sendIcon from "../../assets/image/sendIcon.svg";

const Input = props => {
  return (
    <div className="user-message">
      <div className="message-wrapper">
        <input type="text" placeholder="Your messages" className="input-msg" />
      </div>
      <div className="divider">
        <div
          style={{ height: "40px", width: "1px", backgroundColor: "#E1E7EC" }}
        ></div>
      </div>
      <div className="attachFile">
        <img src={attachfileIcon} alt="" />
      </div>
      <div className="sendMessage">
        <img src={sendIcon} alt="" />
      </div>
    </div>
  );
};

export default Input;
