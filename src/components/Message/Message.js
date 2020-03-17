import React from "react";
import "./style.css";
import "./responsive.css";
import Input from "../../components/Input/Input";

class Message extends React.Component {
  scrollAtBottom() {
    var messages = document.getElementById("messageBody");
    var scrollHeight = document.getElementById("messageBody").scrollHeight;
    messages.scrollTop = scrollHeight;
  }
  componentDidMount() {
    this.scrollAtBottom();
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
                <svg
                  className="first-tick"
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7315 0.782523C18.3735 0.405826 17.7932 0.405826 17.4351 0.782523L6.45289 12.3384L2.23149 7.89655C1.87353 7.51985 1.29316 7.51989 0.935127 7.89655C0.577126 8.2732 0.577126 8.88388 0.935127 9.26057L5.80471 14.3844C6.16256 14.761 6.74336 14.7608 7.10107 14.3844L18.7315 2.14659C19.0895 1.76993 19.0895 1.15922 18.7315 0.782523Z"
                    fill="#4D7CEA"
                  />
                </svg>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7315 0.782523C18.3735 0.405826 17.7932 0.405826 17.4351 0.782523L6.45289 12.3384L2.23149 7.89655C1.87353 7.51985 1.29316 7.51989 0.935127 7.89655C0.577126 8.2732 0.577126 8.88388 0.935127 9.26057L5.80471 14.3844C6.16256 14.761 6.74336 14.7608 7.10107 14.3844L18.7315 2.14659C19.0895 1.76993 19.0895 1.15922 18.7315 0.782523Z"
                    fill="#4D7CEA"
                  />
                </svg>
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
                <svg
                  className="first-tick"
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7315 0.782523C18.3735 0.405826 17.7932 0.405826 17.4351 0.782523L6.45289 12.3384L2.23149 7.89655C1.87353 7.51985 1.29316 7.51989 0.935127 7.89655C0.577126 8.2732 0.577126 8.88388 0.935127 9.26057L5.80471 14.3844C6.16256 14.761 6.74336 14.7608 7.10107 14.3844L18.7315 2.14659C19.0895 1.76993 19.0895 1.15922 18.7315 0.782523Z"
                    fill="#8895A7"
                  />
                </svg>
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7315 0.782523C18.3735 0.405826 17.7932 0.405826 17.4351 0.782523L6.45289 12.3384L2.23149 7.89655C1.87353 7.51985 1.29316 7.51989 0.935127 7.89655C0.577126 8.2732 0.577126 8.88388 0.935127 9.26057L5.80471 14.3844C6.16256 14.761 6.74336 14.7608 7.10107 14.3844L18.7315 2.14659C19.0895 1.76993 19.0895 1.15922 18.7315 0.782523Z"
                    fill="#8895A7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="message-date">
            <hr className="message-divider" />
            <span className="date"> Today </span>
          </div>
          <div className="received-message">
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
