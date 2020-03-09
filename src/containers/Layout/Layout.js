import React, { Component } from "react";
import classes from "./Layout.module.css";
import Message from "../../components/Message/Message";
import Input from "../../components/Input/Input";
import AdvisorDetails from "../../components/AdvisorDetails/AdvisorDetails";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <div className={classes.Wrapper}>
          <div className={classes.AdvisorDetailsWrap}>
            <AdvisorDetails />
          </div>
          <div className={classes.emptyCell}></div>
          <div className={classes.MessageUIWrap}>
              <Message left='0' color="#000000" tcolor='#B8C4CE' bgcolor='#F8F9FA' time='05:07' tick='false' body='Non id reprehenderit enim non velit duis consectetur duis enim sint cupidatat et laboris pariatur.' />
              <Message left='37.5%' color="#FFFFFF" tcolor='#9EBAFA' bgcolor='#1F49AD' time='08:19' body='Et ipsum velit Lorem adipisicing laboris laboris quis do.' />
              <div>24th Feb</div>
              <Message left='37.5%' color="#FFFFFF" tcolor='#9EBAFA' bgcolor='#1F49AD' time='10:11' body='Voluptate consectetur veniam anim nisi consequat.' />
              <div>Today</div>
              <Message left='0' color="#000000" tcolor='#B8C4CE' bgcolor='#F8F9FA' time='02:20' body='Dolore culpa aliqua sit elit amet non.' />
              <Input />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
