import React from "react";

import "./ButtonWhite.css";

const ButtonWhite = (props) => {
  const classArray = ["ButtonWhite"];
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

export default ButtonWhite;
