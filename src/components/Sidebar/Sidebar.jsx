import React from "react";

import logo from "../../Resources/images/FullLogo.png";
import dashboardIcon from "../../Resources/images/dashboardIcon.png";
import wallet from "../../Resources/images/FintechWallet.png";
import transaction from "../../Resources/images/Transactions.png";
import hub from "../../Resources/images/NFT.png";
import exchange from "../../Resources/images/Exchange.png";
import externalink from "../../Resources/images/External Link.png";
import nft from "../../Resources/images/Settings.png";
import roqquhub from "../../Resources/images/RoqquHub.png";
import help from "../../Resources/images/Help.png";

import "./Sidebar.css";
import NavLink from "./NavLink";

const Dashboard = ({ title, zero, one, two, three, four, five }) => {
  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="logo" className="hero" />

        <div className="OVERVIEW">{zero}</div>

        <div className="sidebar-dashboard">
          <span className="sidebar-icon">
            <img src={dashboardIcon} alt="dashboardIcon" />
          </span>
          Dashboard
        </div>

        <NavLink page={two} icon={wallet} />
        <NavLink page={one} icon={transaction} />
        <NavLink page={three} icon={hub} />

        <div className="nft">
          <div>
            <span className="sidebar-icon">
              <img src={exchange} alt="exchange" />
            </span>
            {four}{" "}
          </div>
          <span className="sidebar-exlink">
            <img src={externalink} alt="" />
          </span>
        </div>
        <div className="support">{five}</div>
        <div className="roqqu-hub">
          <span className="sidebar-icon">
            <img src={nft} alt="nft" />
          </span>
          Settings
        </div>
        <div className="roqqu-hub">
          <span className="sidebar-icon">
            <img src={roqquhub} alt="roqqubub" />
          </span>
          Roqqu Hub
        </div>
        <div className="roqqu-hub">
          <span className="sidebar-icon">
            <img src={help} alt="help" />
          </span>
          Help/Support
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
