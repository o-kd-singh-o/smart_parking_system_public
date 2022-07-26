import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = (props) => (
  <div className="NavigationItem">
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </div>
);

export default NavigationItem;
