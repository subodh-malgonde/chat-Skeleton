import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "./responsive.css";
import Input from "../../components/Input/Input";
import readmarksIcon from "../../assets/image/readmarksIcon.svg";
import unreadmarksIcon from "../../assets/image/unreadmarksIcon.svg";

class Message extends React.Component {
  scrollToBottom() {
    this.messagesEnd.scrollIntoView(false);
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="chat-wrapper">
        <div className="chat-messages-wrapper" id="messageBody">
          <div className="received-message">
            <p className="received-text">
              Hi Anantha, I need help with starting my mutual fund investments.
              My age is between 25-30 and I would like to invest upto Rs 10,000
              per month
            </p>
            <div className="details">
              <span className="time">10: 25 AM</span>
            </div>
          </div>
          <div className="received-message">
            <p className="received-text">
              Hi Anantha, I need help with starting my mutual fund investments.
              My age is between 25-30 and I would like to invest upto Rs 10,000
              per month
            </p>
            <div className="details">
              <span className="time">10: 25 AM</span>
            </div>
          </div>

          <div className="sent-message">
            <p className="sent-text">
              Hi Subodh, can you please tell me your PAN number. I will check if
              KYC is required for you.
            </p>
            <div className="details">
              <span className="time">10: 25 AM</span>
              <span className="read-ticks">
                <img src={readmarksIcon} alt="" />
              </span>
            </div>
          </div>
          <div className="message-date">
            <hr className="message-divider" />
            <span className="date"> 24 th Feb </span>
          </div>
          <div className="sent-message">
            <p className="sent-text">Also, which city are you based in? </p>
            <div className="details">
              <span className="time">10: 25 AM</span>
              <span className="read-ticks">
                <img src={unreadmarksIcon} alt="" />
              </span>
            </div>
          </div>
          <div className="message-date">
            <hr className="message-divider" />
            <span className="date"> Today </span>
          </div>
          {/* ******IMPORTANT***** 
          Don't forget to put the ref for the last message. It's used to make the scroll at bottom onload*/}
          <div
            className="received-message"
            ref={el => {
              this.messagesEnd = el;
            }}
          >
            <p className="received-text">
              I am based in Mumbai and my PAN is AAAASSSS
            </p>
            <div className="details">
              <span className="time">10: 25 AM</span>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <Input />
        </div>
      </div>
    );
  }
}

export default Message;
