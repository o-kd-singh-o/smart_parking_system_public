import React from "react";

import "./Bubbles.css";

function Bubbles(props) {
  const classArray = ["circle"];
  classArray.push(props.classes);
  const classString = classArray.join(" ");
  return (
    <div className={classString}>
      <div className="circle-text">{props.children}</div>
    </div>
  );
}

export default Bubbles;
