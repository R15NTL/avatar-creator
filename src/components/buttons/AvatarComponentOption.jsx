import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";
import OptionButtonBase from "./OptionButtonBase";

export const AvatarComponentOption = (props) => {
  const { componentIndex, optionIndex, option, imgViewBox } = props;

  const selectedButtonInThisMenu = useSelector(
    (state) => state.avatarComponentSelector[componentIndex]
  );

  const dispatch = useDispatch();

  const { updateAvatarComponentSelectorOption } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const isSelected = selectedButtonInThisMenu === optionIndex;

  const component = option;
  return (
    <OptionButtonBase
      className={!isSelected && "bg-neutral-200"}
      isSelected={isSelected}
      onClick={() =>
        updateAvatarComponentSelectorOption(componentIndex, optionIndex)
      }
    >
      <div className="">
        <svg
          viewBox={imgViewBox}
          version="1.1"
          id="svg64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>{React.cloneElement(component)}</g>
        </svg>
      </div>
    </OptionButtonBase>
  );
};

export default AvatarComponentOption;
