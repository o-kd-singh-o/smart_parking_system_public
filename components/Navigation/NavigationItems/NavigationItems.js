import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <div className="NavigationItems">
    <div className="Logo">iPark</div>
    <div className="NavigationItems-menu">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/bookings">Bookings</NavigationItem>
    </div>
  </div>
);

export default navigationItems;
