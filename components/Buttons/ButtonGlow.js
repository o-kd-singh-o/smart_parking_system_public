import React from "react";

import "./ButtonGlow.css";

const ButtonGlow = (props) => {
  const classArray = ["ButtonGlow"];
  if (props.classes) {
    classArray.push(props.classes);
  }
  const classString = classArray.join(" ");
  return (
    <button type={props.type} className={classString} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonGlow;
