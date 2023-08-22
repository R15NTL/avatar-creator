import React from "react";
import { useSelector } from "react-redux";
import {
  styleOptions,
  interfaceTree,
  pathOptions,
} from "../../../../avatars/avatarCreator/avatarTree";
import AvatarComponentOption from "../../../buttons/AvatarComponentOption";
import AvatarColorOption from "../../../buttons/AvatarColorOption";
import ComponentMenuHeader from "./ComponentMenuHeader";

function ComponentMenu() {
  const interfaceSelected = useSelector((state) => state.avatarSelectionMenu);
  const thisOption = convertSelectedIndexToInterfaceTree(interfaceSelected);
  const optionComponentElements = getOptionComponentElements(thisOption);
  const colorComponentElements = getColorComponentElements(thisOption);

  return (
    <div className=" flex flex-col flex-1 ">
      <ComponentMenuHeader
        colorTitle={thisOption ? thisOption.colorTitle : false}
        componentTitle={thisOption ? thisOption.title : false}
      />

      <div className=" flex flex-1 flex-row">
        <section
          className={`flex-1  flex flex-col overflow-auto pt-2 pb-6 ${
            colorComponentElements ? "" : "hidden"
          }`}
        >
          <div className="h-2"></div>
          {colorComponentElements && colorComponentElements}
        </section>
        <div
          className={` w-px bg-slate-600 ${
            optionComponentElements && colorComponentElements ? "" : "hidden"
          }`}
        ></div>
        <section
          className={`flex-1 flex flex-col pt-2 pb-6
        ${optionComponentElements ? "" : "hidden"}
        `}
        >
          <div className="h-1"></div>
          <div
            className={`grid grid-cols-2 px-1 h-fit overflow-hidden overflow-y-auto 
          phone-md:grid-cols-3 
          
          ${
            colorComponentElements
              ? `sm:grid-cols-2 lg:grid-cols-1 `
              : `sm:grid-cols-3 lg:grid-cols-2`
          }
          `}
          >
            {optionComponentElements ? optionComponentElements : ""}
          </div>
        </section>
      </div>
    </div>
  );
}

function convertSelectedIndexToInterfaceTree(selectedIndex) {
  const optionNames = Object.keys(interfaceTree);
  return interfaceTree[optionNames[selectedIndex]];
}

function getColorComponentElements(thisOption) {
  if (!thisOption || !thisOption.colors) {
    return false;
  }
  const colorsName = thisOption.colors;
  const colorIndex = thisOption.colorIndex;
  const elements = styleOptions[colorsName].map((component, optionIndex) => {
    const option = styleOptions[colorsName][optionIndex];
    return (
      <AvatarColorOption
        key={optionIndex}
        option={option}
        menuIndex={colorIndex}
        optionIndex={optionIndex}
      />
    );
  });
  return elements;
}

function getOptionComponentElements(thisOption) {
  if (!thisOption || !thisOption.components) {
    return false;
  }
  const componentName = thisOption.components;
  const componentIndex = thisOption.componentIndex;
  const elements = pathOptions[componentName].map((component, optionIndex) => {
    return (
      <AvatarComponentOption
        imgViewBox={thisOption.componentViewBox}
        key={optionIndex}
        option={pathOptions[componentName][optionIndex]}
        componentIndex={componentIndex}
        optionIndex={optionIndex}
      />
    );
  });
  return elements;
}

export default ComponentMenu;
