import React from "react";
import "./index.css";

function Title(props) {
  return (
    <ul className="nav nav-tabs navbar-fixed-top">
      <li className="nav-item">
        It's all in the mind!
      </li>
      <li className="nav-item">
        Score: {props.score}
      </li>
    </ul>
  )}

export default Title;
