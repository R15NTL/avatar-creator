import React from "react";
import { pathOptions } from "../avatarCreator/avatarTree";

export default function PathGenerator(props) {
  const options = props.options;

  let elements = [];
  let i = 0;
  for (let path in pathOptions) {
    elements.push(pathOptions[path][options[i++]]);
  }

  return (
    <>
      {elements.map((element, index) => {
        return React.cloneElement(element, { key: index });
      })}
    </>
  );
}
