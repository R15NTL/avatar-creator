import React from "react";
import Close from "../../../icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../Redux";
import {
  styleOptions,
  interfaceTree,
  pathOptions,
} from "../../../../avatars/avatarCreator/avatarTree";
import AvatarComponentOption from "../../../buttons/AvatarComponentOption";
import AvatarColorOption from "../../../buttons/AvatarColorOption";
import ComponentMenuHeader from "./ComponentMenuHeader";

function ComponentMenu() {
  const dispatch = useDispatch();
  const { updateAvatarSelectionMenu } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const interfaceSelected = useSelector((state) => state.avatarSelectionMenu);
  const thisOption = convertSelectedIndexToInterfaceTree(interfaceSelected);
  const optionIsSelected = interfaceSelected !== null;
  const optionComponentElements = getOptionComponentElements(thisOption);
  const colorComponentElements = getColorComponentElements(thisOption);

  return (
    <div className=" flex flex-col flex-1 ">
      <ComponentMenuHeader
        colorTitle={thisOption ? thisOption.colorTitle : false}
        componentTitle={thisOption ? thisOption.title : false}
      />

      <div className=" flex flex-1 flex-row ">
        <section
          className={`flex-1  flex flex-col overflow-auto ${
            colorComponentElements ? "" : "hidden"
          }`}
        >
          <div className="h-2"></div>
          {colorComponentElements ? colorComponentElements : ""}
        </section>
        <div className=" w-px bg-slate-600"></div>
        <section
          className={`flex-1 flex flex-col
        ${optionComponentElements ? "" : "hidden"}
        `}
        >
          <div className="h-1"></div>
          <div className=" grid grid-cols-2 px-1 phone-md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 h-fit overflow-hidden overflow-y-auto">
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
