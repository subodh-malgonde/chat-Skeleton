import React from "react";
import "./style.css";
import "./responsive.css";

const AdvisorDetails = props => {
  return (
    <div className="advisor-details-wrapper">
      <div className="advisor-data">
        <div className="advisor-img">
          <img
            src="https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
            alt=""
          />
        </div>
        <div className="advisor-personal-info">
          <span className="advisor-name">Anantha Raman</span>
          <span className="advisor-title">Software Professional, Mumbai</span>
          <div className="advisor-status">
            <span className="dot"></span>
            <span className="status">Offline</span>
          </div>
          <div className="advisor-phone">
            <span className="phone-icon">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5813 12.3435L12.3426 10.1836C11.9316 9.91174 11.3806 10.0012 11.0768 10.3892L10.1334 11.6022C10.0122 11.762 9.79177 11.8084 9.61637 11.711L9.43692 11.612C8.84203 11.2878 8.10184 10.8841 6.61048 9.39221C5.11913 7.90033 4.71463 7.15957 4.39037 6.56578L4.29197 6.38632C4.1932 6.21096 4.23869 5.98963 4.39862 5.86742L5.61078 4.92431C5.99862 4.62043 6.08821 4.06966 5.81664 3.65853L3.6568 0.419844C3.37848 0.00118926 2.82009 -0.124489 2.38921 0.134523L1.03491 0.948054C0.609381 1.19822 0.297186 1.60338 0.16379 2.07862C-0.323891 3.85555 0.0429864 6.92225 4.56051 11.4403C8.15411 15.0336 10.8294 16 12.6682 16C13.0914 16.0018 13.5129 15.9467 13.9214 15.8362C14.3968 15.703 14.802 15.3908 15.052 14.9651L15.8663 13.6116C16.1257 13.1807 16.0001 12.6219 15.5813 12.3435ZM15.4069 13.338L14.5944 14.6923C14.4149 14.9996 14.1234 15.2255 13.7811 15.3227C12.1407 15.7731 9.27481 15.4 4.9378 11.063C0.600788 6.72601 0.227785 3.86036 0.678156 2.21971C0.775524 1.87698 1.00169 1.58516 1.3093 1.40536L2.6636 0.592894C2.85055 0.480402 3.09291 0.534929 3.21368 0.716603L4.38693 2.47806L5.37167 3.95501C5.4896 4.13334 5.45085 4.37235 5.28261 4.50431L4.07018 5.44743C3.7012 5.72956 3.59584 6.24005 3.82301 6.64521L3.91928 6.82013C4.26007 7.44515 4.68375 8.22268 6.23057 9.76925C7.77739 11.3158 8.55468 11.7395 9.17941 12.0803L9.35458 12.1768C9.75971 12.4039 10.2702 12.2986 10.5524 11.9296L11.4955 10.7172C11.6275 10.549 11.8664 10.5103 12.0448 10.6281L15.2832 12.788C15.465 12.9086 15.5195 13.1511 15.4069 13.338Z"
                  fill="#3361CC"
                />
                <path
                  d="M9.06687 2.66767C11.5692 2.67045 13.5971 4.69833 13.5999 7.20066C13.5999 7.34793 13.7192 7.4673 13.8665 7.4673C14.0138 7.4673 14.1331 7.34793 14.1331 7.20066C14.13 4.40391 11.8636 2.13746 9.06687 2.1344C8.9196 2.1344 8.80023 2.25377 8.80023 2.40104C8.80023 2.54831 8.9196 2.66767 9.06687 2.66767Z"
                  fill="#3361CC"
                />
                <path
                  d="M9.06687 4.26752C10.686 4.26943 11.9981 5.58152 12 7.20064C12 7.34791 12.1194 7.46728 12.2666 7.46728C12.4139 7.46728 12.5333 7.34791 12.5333 7.20064C12.531 5.2871 10.9804 3.73644 9.06687 3.73425C8.9196 3.73425 8.80023 3.85362 8.80023 4.00089C8.80023 4.14816 8.9196 4.26752 9.06687 4.26752Z"
                  fill="#3361CC"
                />
                <path
                  d="M9.06687 5.86738C9.80281 5.86825 10.3992 6.46464 10.4001 7.20062C10.4001 7.34789 10.5195 7.46725 10.6667 7.46725C10.814 7.46725 10.9334 7.34789 10.9334 7.20062C10.9322 6.17026 10.0972 5.33526 9.06687 5.33411C8.9196 5.33411 8.80023 5.45347 8.80023 5.60074C8.80023 5.74801 8.9196 5.86738 9.06687 5.86738Z"
                  fill="#3361CC"
                />
              </svg>
            </span>
            <span className="phone-number">98989 89898</span>
          </div>
        </div>
      </div>
      <hr className="my-divider" />
      <div className="advisor-statistics">
        <div className="statistics-details">
          <div className="AuA-wrapper">
            <span className="statistics-category">AuA</span>
            <span className="statistics-style">5 Crores</span>
          </div>
          <div className="Clients-wrapper">
            <span className="statistics-category">Clients</span>
            <span className="statistics-style">55+</span>
          </div>
          <div className="experience-wrapper">
            <span className="statistics-category">Experience:</span>
            <span className="statistics-style">9+ years</span>
          </div>
        </div>
      </div>
      <hr className="my-divider" />
      <div className="advisor-bio">
        <div className="bio">
          <p>
            P Anantha Raman is majorly a trader in the financial markets. He
            makes his living by trading the NSE derivatives market. He is
            passionate about spreading financial literacy and educating clients
            about the, highly misunderstood, concept of risk. With this
            approach, he became a financial planner and advisor in 2010.
            <br />
            <br /> He believes in, a goal based, data driven approach to
            investing, as per the needs of the individual. He was advising.
            <br />
            <br /> P Anantha Raman is majorly a trader in the financial markets.
            He makes his living by trading the NSE derivatives market. He is
            passionate about spreading financial literacy and educating clients
            about the, highly misunderstood, concept of risk. With this
            approach, he became a financial planner and advisor in 2010. ...
            <br />
            <span className="more-btn">More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDetails;
