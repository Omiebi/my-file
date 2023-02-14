import React from "react";

import "./Sidebar.css";

const NavLink = ({ page, icon }) => {
  return (
    <div className="roqqu-hub">
      <span className="sidebar-icon">
        <img src={icon} alt="hub" />
      </span>
      {page}
    </div>
  );
};

export default NavLink;
