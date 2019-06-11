import React from "react";
import "./index.css";

function Title(props) {
  return (
    <ul className="nav nav-tabs navbar-fixed-top">
      <li className="gameName">
        It's all in the mind!
      </li>
      <li className="scoreArea">
        Score: {props.score}
      </li>
    </ul>
  )}

export default Title;
