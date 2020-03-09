import React from "react";
import classes from "./AdvisorDetails.module.css";

const AdvisorDetails = prrops => {
  return (
    <div className={classes.AdvisorDetails}>
      <div className={classes.ProfileWrap}>
        <div className={classes.ProfileImage}>
          <img src="https://img.icons8.com/wired/120/000000/human-head.png" />
        </div>
        <div className={classes.ProfileDetailWrap}>
          <div>Anantha Raman </div>
          <div>Software Professional, Mumbai</div>
          <div>
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "100%",
                backgroundColor: "#E1E7EC"
              }}
            ></span>
            <span>Offline</span>
          </div>
        </div>
      </div>
      <hr style={{ margin: "20px" }} />
      <div className={classes.DetailWrap}>
        <div className={classes.Experience}>AuA</div>
        <div className={classes.Experience}>Clients</div>
        <div className={classes.Experience}>Experience</div>
      </div>
      <div className={classes.DetailWrap}>
        <div className={classes.Experience}>5 Crores</div>
        <div className={classes.Experience}>55+</div>
        <div className={classes.Experience}>9+ years</div>
      </div>
      <hr style={{ margin: "20px" }} />{" "}
      <p style={{textAlign:'left',paddingLeft:'24px'}}>
        P Anantha Raman is majorly a trader in the financial markets. He makes
        his living by trading the NSE derivatives market. He is passionate about
        spreading financial literacy and educating clients about the, highly
        misunderstood, concept of risk. With this approach, he became a
        financial planner and advisor in 2010. He believes in, a goal based,
        data driven approach to investing, as per the needs of the individual.
        He was advising
      </p>
      <div>more</div>
    </div>
  );
};

export default AdvisorDetails;
