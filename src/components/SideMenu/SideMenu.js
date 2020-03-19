import React from "react";
import "./style.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Menu } from "antd";

import closeSideMenuIcon from "../../assets/image/sideMenuIcons/closeSideMenuIcon.svg";
import homeSideMenuIcon from "../../assets/image/sideMenuIcons/homeSideMenuIcon.svg";
import suggestMutualFunds from "../../assets/image/sideMenuIcons/suggestMutualFunds.svg";
import QuestionAndAnswerForum from "../../assets/image/sideMenuIcons/QuestionAndAnswerForum.svg";
import learnIcon from "../../assets/image/sideMenuIcons/learnIcon.svg";
import toolsIcon from "../../assets/image/sideMenuIcons/toolsIcon.svg";
import aboutDhanWiseIcon from "../../assets/image/sideMenuIcons/aboutDhanWiseIcon.svg";
import questions from "../../assets/image/sideMenuIcons/questions.svg";
import phoneIcon from "../../assets/image/sideMenuIcons/phoneIcon.svg";
import msgsNumber from "../../assets/image/sideMenuIcons/msgsNumber.svg";

const { SubMenu } = Menu;

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    isActive: this.props.isActive,
    isLoggedIn: true,
    firstTime: false,
    openKeys: ["sub3"]
  };

  handleHide = () => {
    var that = this;
    this.setState({
      firstTime: true
    });
    setTimeout(function() {
      that.setState({
        isActive: !that.state.isActive,
        firstTime: false
      });

      document.body.style.position = "";
      that.handleActiveChange();
    }, 500);
  };

  handleActiveChange = () => {
    this.props.onChange(this.state.isActive);
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    let hide_class = this.state.firstTime ? "sideMenuTest" : null;

    return (
      <>
        {this.state.isActive ? (
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 256 }}
            className={hide_class + " sideMenu-ul"}
          >
            <Menu.Item key="1" className="sideMenu-li">
              <div className="test" onClick={this.handleHide.bind(this)}>
                <img src={closeSideMenuIcon} alt="" className="close-icon" />
              </div>
            </Menu.Item>
            {this.state.isLoggedIn ? (
              <Menu.Item key="2" className="sideMenu-li your-advisor">
                <div
                  className="menu-item-content-wrapper"
                  id="your-advisor-wrapper"
                >
                  <div id="your-advisor">Your Advisor</div>
                  <img
                    src="https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
                    alt=""
                    className="menu-item-icon"
                    id="menu-item-icon-avdisor-img"
                  />
                  <span className="menu-item-text" id="sidemenu-advisor-name">
                    Anantha Raman
                  </span>
                  <img
                    src={msgsNumber}
                    alt=""
                    className="menu-item-icon"
                    id="menu-item-icon-messages-number"
                  />
                  <span id="msg-number">1</span>
                </div>
              </Menu.Item>
            ) : (
              <Menu.Item key="2" className="sideMenu-li">
                <div className="menu-item-content-wrapper">
                  <img
                    src={homeSideMenuIcon}
                    alt=""
                    className="menu-item-icon"
                  />
                  <span className="menu-item-text">Home</span>
                </div>
              </Menu.Item>
            )}

            <Menu.Item key="3" className="sideMenu-li">
              <div className="menu-item-content-wrapper">
                <img
                  src={suggestMutualFunds}
                  alt=""
                  className="menu-item-icon"
                />
                {this.state.isLoggedIn ? (
                  <span className="menu-item-text">Your Financial Plan</span>
                ) : (
                  <span className="menu-item-text">Suggest Mutual Funds</span>
                )}
              </div>
            </Menu.Item>
            <Menu.Item key="4" className="sideMenu-li">
              <div className="menu-item-content-wrapper">
                <img
                  src={QuestionAndAnswerForum}
                  alt=""
                  className="menu-item-icon"
                />
                <span className="menu-item-text">Q&amp;A Forum</span>
              </div>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <div className="menu-item-content-wrapper">
                  <img src={learnIcon} alt="" className="menu-item-icon" />
                  <span className="menu-item-text">Learn</span>
                </div>
              }
              className="sideMenu-li sideMenu-subMenu"
            >
              <Menu.Item key="5" className="sideMenu-li-li">
                <div className="submenu-item-content-wrapper">
                  <span className="submenu-item-text">About DhanWise</span>
                </div>
              </Menu.Item>
              <Menu.Item key="6" className="sideMenu-li-li">
                <div className="submenu-item-content-wrapper">
                  <span className="submenu-item-text">About DhanWise</span>
                </div>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <div className="menu-item-content-wrapper">
                  <img src={toolsIcon} alt="" className="menu-item-icon" />
                  <span className="menu-item-text">Tools</span>
                </div>
              }
              className="sideMenu-li sideMenu-subMenu"
            >
              <Menu.Item key="7" className="sideMenu-li-li">
                <div className="submenu-item-content-wrapper">
                  <span className="submenu-item-text">
                    Case Study: Financial Planning for a 30 year old
                  </span>
                </div>
              </Menu.Item>
              <Menu.Item key="8" className="sideMenu-li-li">
                <div className="submenu-item-content-wrapper">
                  <span className="submenu-item-text">Mutual Fund Basics</span>
                </div>
              </Menu.Item>
              <Menu.Item key="9" className="sideMenu-li-li">
                <div className="submenu-item-content-wrapper">
                  <span className="submenu-item-text">
                    Life Insurance Basics
                  </span>
                </div>
              </Menu.Item>
              <Menu.Item key="10" className="sideMenu-li-li">
                <div className="submenu-item-content-wrapper">
                  <span className="submenu-item-text">
                    Health Insurance Basics
                  </span>
                </div>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="11" className="sideMenu-li">
              <div className="menu-item-content-wrapper">
                <img
                  src={aboutDhanWiseIcon}
                  alt=""
                  className="menu-item-icon"
                />
                <span className="menu-item-text">About DhanWise</span>
              </div>
            </Menu.Item>
            <hr className="side-menu-divider" />
            <Menu.Item key="12" className="sideMenu-li">
              <div className="menu-item-content-wrapper">
                <img src={questions} alt="" className="menu-item-icon" />
                <span className="menu-item-text"> questions@dhanwise.com</span>
              </div>
            </Menu.Item>
            <Menu.Item key="13" className="sideMenu-li">
              <div className="menu-item-content-wrapper">
                <img src={phoneIcon} alt="" className="menu-item-icon" />
                <span className="menu-item-text">+91 98199 81962</span>
              </div>
            </Menu.Item>
          </Menu>
        ) : null}
      </>
    );
  }
}

export default SideMenu;
