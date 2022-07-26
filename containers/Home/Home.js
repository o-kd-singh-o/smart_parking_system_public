import React, { Component, Fragment } from "react";

import "./Home.css";
import Bubbles from "../../components/Bubbles/Bubbles";
import Login from "../Login/Login";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="slide-right">
          <h1 className="home-content">
            <span className="home-content-i">i</span>Park
          </h1>
          <h2>Smart Parking System</h2>
        </div>
        <Bubbles classes="bubble1">
          Smart Parking is one of the new technology!
        </Bubbles>
        <Bubbles classes="bubble2">
          Will fell in love with the easiest way to park.
        </Bubbles>
        <Login />
      </Fragment>
    );
  }
}

export default Home;
