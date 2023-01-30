import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";

export const AvatarComponentOption = (props) => {
  const { componentIndex, optionIndex, option } = props;

  const selectedButtonInThisMenu = useSelector(
    (state) => state.avatarComponentSelector[componentIndex]
  );

  const dispatch = useDispatch();

  const { updateAvatarComponentSelectorOption } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const component = option;
  return (
    <div
      style={{
        marginLeft: selectedButtonInThisMenu === optionIndex ? "10px" : "0px",
      }}
      className=" bg-slate-600"
      onClick={() =>
        updateAvatarComponentSelectorOption(componentIndex, optionIndex)
      }
    >
      <div className=" h-16 ">
        <svg
          viewBox="0 0 512 512"
          version="1.1"
          id="svg64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>{React.cloneElement(component)}</g>
        </svg>
      </div>
    </div>
  );
};

export default AvatarComponentOption;
