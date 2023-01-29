import React from "react";
import StyleGenerator from "./styleGenerator";
import PathGenerator from "./pathGenerator";

function AvatarSvg(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      version="1.1"
      id="svg64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          <StyleGenerator selectedOptions={props.styleOptions} />
        </style>
      </defs>
      <g>
        <PathGenerator options={props.pathOptions} />
      </g>
    </svg>
  );
}

export default AvatarSvg;
