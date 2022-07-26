import React, { Component } from "react";

import "./Login.css";
import fb from "../../assets/images/fb.png";
import tw from "../../assets/images/tw.png";
import gp from "../../assets/images/gp.png";
import ButtonGlow from "../../components/Buttons/ButtonGlow";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.register = React.createRef();
    this.btn = React.createRef();
  }

  registerHandler = () => {
    this.login.current.style.left = "-400px";
    this.register.current.style.left = "50px";
    this.btn.current.style.left = "110px";
  };

  loginHandler = () => {
    this.login.current.style.left = "50px";
    this.register.current.style.left = "450px";
    this.btn.current.style.left = "0px";
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="form-box">
            <div className="button-box">
              <div id="btn" ref={this.btn}></div>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.loginHandler}
              >
                Log In
              </button>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.registerHandler}
              >
                Register
              </button>
            </div>
            <div className="social-icons">
              <img src={fb} alt="fb.png" />
              <img src={tw} alt="tw.png" />
              <img src={gp} alt="gp.png" />
            </div>
            <form id="login" ref={this.login} className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
              <input type="checkbox" className="check-box" />
              <span>Remember Password</span>
              <ButtonGlow type="submit" classes="submit-btn">
                Log In
              </ButtonGlow>
            </form>
            <form id="register" ref={this.register} className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="email"
                className="input-field"
                placeholder="E-Mail"
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
              <input type="checkbox" className="check-box" />
              <span>I agree to terms & conditions</span>
              <ButtonGlow type="submit" classes="submit-btn">
                Register
              </ButtonGlow>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
