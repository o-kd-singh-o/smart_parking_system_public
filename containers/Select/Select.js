import React, { Component, Fragment } from "react";

import "./Select.css";
import Options from "../../components/Options/Options";

class Select extends Component {
  render() {
    const arr = this.props.array; //arr is an array with minimum of three key value pairs that're "id","name" & "label"
    const classArray = ["select"];
    classArray.push(this.props.classes);
    const classString = classArray.join(" ");
    return (
      <Fragment>
        <select
          // ref={this.props.reff}
          className={classString}
          onChange={(event) => this.props.changed(event)}
          ref={this.props.refHandler}
        >
          <option value="null">{this.props.children}</option>
          {arr.map((a) => {
            return (
              <Options key={a.id} name={a.name} value={a.name}>
                {a.label}
              </Options>
            );
          })}
        </select>
      </Fragment>
    );
  }
}

export default Select;
