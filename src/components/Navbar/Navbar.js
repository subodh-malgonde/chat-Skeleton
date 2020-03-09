import React from "react";
import classes from "./Navbar.module.css";
import message from "../../assets/image/messageIcon.svg";
import logout from "../../assets/image/logoutIcon.svg";

const Navbar = props => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Wrapper}>
        <div className={classes.LogoWrap}>
          <div>Dhanwise</div>
        </div>
        <div className={classes.emptyCell}></div>
        <div className={classes.clientText}>Clients</div>
        <div className={classes.messageIcon}>
          <img src={message} alt='Message_image'/>
        </div>
        <div className={classes.Line}>
          <div style={{height:'40px',width:'1px',backgroundColor:'#E1E7EC'}}></div>
        </div>
        <div className={classes.Logout}>Logout</div>
        <div className={classes.logoutIcon}>
          <img src={logout} alt='Logout_image'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
