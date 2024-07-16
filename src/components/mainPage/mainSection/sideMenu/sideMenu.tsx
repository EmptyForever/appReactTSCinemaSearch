import React from "react";
import "./sideMenu.scss";

const SideMenu = (): JSX.Element => {
  return (
    <>
      <div className="sideMenu">
        <ul>
          <li>Home</li>
          <li>Favorites</li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
