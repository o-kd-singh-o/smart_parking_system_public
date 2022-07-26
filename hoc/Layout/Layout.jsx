import React, { Component } from "react";

import "./Layout.css";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <NavigationItems />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
