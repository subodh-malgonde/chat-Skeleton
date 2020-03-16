import React from "react";
import "./style.css";
import "./responsive.css";
import logoutIcon from "../../assets/image/logoutIcon.svg";
import messageIcon from "../../assets/image/messageIcon.svg";
import toggleIcon from "../../assets/image/toggleIcon.svg";
import infoIcon from "../../assets/image/infoIcon.svg";
import { Layout, Menu, Divider } from "antd";
const { Header } = Layout;

const Navbar = props => {
  return (
    <>
      <Layout className="header-layout">
        <Header className="header">
          <div className="logo">
            <a href="#" className="logo-text">
              DhanWise
            </a>
          </div>
          <Menu
            className="navbar-menu"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" className="clients">
              <a href="#" className="nav-clients">
                Clients
              </a>
            </Menu.Item>
            <Menu.Item key="2" className="messages">
              <div className="messages-wrapper">
                <span className="messages-number-wrapper">
                  <span className="messages-number">1</span>
                </span>
                <img src={messageIcon} />
              </div>
            </Menu.Item>
            <Menu.Item key="3" className="divider-wrapper">
              <Divider type="vertical" className="navmenu-divider" />
            </Menu.Item>
            <Menu.Item key="4">
              <div className="logout-wrapper">
                <a href="#" className="logout-text">
                  Logout
                </a>
                <img src={logoutIcon} alt="" />
              </div>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <div className="mobile-nav">
        <div className="toggle-icon">
          <img src={toggleIcon} alt="" />
          <span className="mobile-messages-number-wrapper">
            <span className="mobile-messages-number">3</span>
          </span>
        </div>
        <div className="mobile-advisor-data">
          <div className="name-img">
            <img
              src="https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
              alt=""
              className="mobile-advisor-img"
            />
            <span className="mobile-advisor-name">Anantha Raman</span>
          </div>
          <img src={infoIcon} alt="" className="mobile-infoIcon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
