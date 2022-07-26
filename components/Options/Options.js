import React from "react";

import "./Options.css";

const Options = (props) => {
  return (
    <option className="option" name={props.name} value={props.name}>
      {props.children}
    </option>
  );
};

export default Options;
