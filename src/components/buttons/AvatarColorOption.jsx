import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";

export const AvatarColorOption = (props) => {
  const { menuIndex, optionIndex } = props;
  const selectedButtonInThisMenu = useSelector(
    (state) => state.avatarStyleSelector[menuIndex]
  );

  const dispatch = useDispatch();

  const { updateAvatarStyleSelectorOption } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const colors = Object.keys(props.option).map((optionName) => {
    return props.option[optionName][0][1];
  });
  return (
    <div
      style={{
        backgroundColor: colors[0],
        marginLeft: selectedButtonInThisMenu === optionIndex ? "10px" : "0px",
      }}
      className="w-24 h-8 flex flex-row outline outline-0 rounded-tr-md rounded-tl-2xl rounded-bl-sm rounded-br-2xl outline-multiplayerDark 
      hover:outline-4 cursor-pointer  overflow-hidden"
      onClick={() => updateAvatarStyleSelectorOption(menuIndex, optionIndex)}
    >
      <div
        style={{ backgroundColor: colors[2] || colors[1] || colors[0] }}
        className=" flex-1 flex "
      >
        <div
          style={{ backgroundColor: colors[1] || colors[0] }}
          className="flex-1 flex ml-2 rounded-tl-2xl "
        >
          <div
            style={{ backgroundColor: colors[0] }}
            className="flex-1 ml-4 rounded-tl-2xl "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AvatarColorOption;
