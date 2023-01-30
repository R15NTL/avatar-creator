import React from "react";
import Close from "../../../icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../Redux";
import {
  interfaceTree,
  pathOptions,
} from "../../../../avatars/avatarCreator/avatarTree";
import AvatarComponentOption from "../../../buttons/AvatarComponentOption";

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

  return (
    <div className=" flex flex-col p-2 flex-1 ">
      <header className=" lg:hidden flex h-8 mb-2">
        <button
          className=" ml-auto "
          onClick={() => {
            updateAvatarSelectionMenu(null);
          }}
        >
          <Close hoverColor="#9C59F5" />
        </button>
      </header>
      <div className=" flex flex-1 flex-row ">
        <section className=" flex-1"></section>
        <div className=" w-px bg-slate-600 rounded-sm"></div>
        <section className=" flex-1">
          {optionComponentElements ? optionComponentElements : ""}
        </section>
      </div>
    </div>
  );
}

function convertSelectedIndexToInterfaceTree(selectedIndex) {
  const optionNames = Object.keys(interfaceTree);
  return interfaceTree[optionNames[selectedIndex]];
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
