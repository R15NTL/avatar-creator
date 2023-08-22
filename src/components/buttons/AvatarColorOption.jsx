import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";

export const AvatarColorOption = (props) => {
  const { menuIndex, optionIndex, option } = props;
  const selectedButtonInThisMenu = useSelector(
    (state) => state.avatarStyleSelector[menuIndex]
  );

  const dispatch = useDispatch();

  const { updateAvatarStyleSelectorOption } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const colors = Object.keys(option).map((optionName) => {
    return option[optionName][0][1];
  });
  return (
    <div
      style={{
        backgroundColor: colors[0],
      }}
      className={` transition-all duration-250 h-8 shadow-sm flex flex-row rounded-tr-md rounded-tl-2xl 
      rounded-bl-sm rounded-br-2xl cursor-pointer  overflow-hidden
      sm:h-12 border-2 border-neutral-800
       ${
         selectedButtonInThisMenu === optionIndex
           ? "mr-1 hover:mr-0"
           : "mr-12 hover:mr-10"
       } `}
      onClick={() => updateAvatarStyleSelectorOption(menuIndex, optionIndex)}
    >
      <div
        style={{ backgroundColor: colors[2] || colors[1] || colors[0] }}
        className=" flex-1 flex "
      >
        <div
          style={{ backgroundColor: colors[1] || colors[0] }}
          className={`flex-1 flex  rounded-tl-2xl transition-all duration-250
          ${selectedButtonInThisMenu === optionIndex ? "ml-4" : "ml-2"}
          `}
        >
          <div
            style={{ backgroundColor: colors[0] }}
            className={`flex-1 rounded-tl-2xl transition-all duration-250
            ${selectedButtonInThisMenu === optionIndex ? "ml-8" : "ml-4"}
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AvatarColorOption;
