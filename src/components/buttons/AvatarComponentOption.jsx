import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";

export const AvatarComponentOption = (props) => {
  const { componentIndex, optionIndex, option, imgViewBox } = props;

  const [hover, setHover] = useState(false);

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
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`mx-1 h-fit text-center border border-slate-500 my-1 p-1 rounded-sm shadow-sm shadow-singlePlayer950
      transition duration-200 ease-in-out
      hover:bg-slate-600 
      active:bg-singlePlayer550  active:border-slate-500
      ${
        selectedButtonInThisMenu === optionIndex
          ? " bg-singlePlayer500 border-singlePlayer400 hover:bg-singlePlayer400 hover:border-singlePlayer250"
          : "hover:bg-slate-600 "
      }
      `}
      onClick={() =>
        updateAvatarComponentSelectorOption(componentIndex, optionIndex)
      }
    >
      <div className=" ">
        <svg
          viewBox={imgViewBox}
          version="1.1"
          id="svg64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>{React.cloneElement(component)}</g>
        </svg>
      </div>
    </button>
  );
};

export default AvatarComponentOption;
