import React from "react";
import classes from "./Input.module.css";
import attachfileIcon from "../../assets/image/attachfileIcon.svg";
import sendIcon from "../../assets/image/sendIcon.svg";

const Input = props => {
  return (
    <div className={classes.Input}>
      <div className={classes.inputWrap}>
        <input type="text" placeholder="Your messages" />
      </div>
      <div className={classes.emptyLine}>
      <div style={{height:'40px',width:'1px',backgroundColor:'#E1E7EC'}}></div>
      </div>
      <div className={classes.attachFileWrap}>
        <img src={attachfileIcon} />
      </div>
      <div className={classes.emptyCell}></div>
      <div className={classes.sendIconWrap}>
        <img src={sendIcon} />
      </div>
      <div className={classes.emptyCell}></div>
    </div>
  );
};

export default Input;
