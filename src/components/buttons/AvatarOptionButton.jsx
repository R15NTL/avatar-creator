import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";
import OptionButtonBase from "./OptionButtonBase";

function AvatarOptionButton({ icon, title, buttonIndex }) {
  const clickedButtonIndex = useSelector((state) => state.avatarSelectionMenu);
  const dispatch = useDispatch();
  const { updateAvatarSelectionMenu } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const isSelected = clickedButtonIndex === buttonIndex;

  const handleClick = () => {
    if (isSelected) {
      updateAvatarSelectionMenu(null);
      return;
    }
    updateAvatarSelectionMenu(buttonIndex);
  };

  return (
    <OptionButtonBase
      className={"p-1"}
      onClick={handleClick}
      isSelected={isSelected}
    >
      <div className="p-1">
        <svg
          viewBox="0 0 512 512"
          version="1.1"
          id="svg64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>{React.cloneElement(icon)}</g>
        </svg>
      </div>
      <div
        className={`
        mt-2 h-[2px] transition duration-200 ease-in-out bg-neutral-800
      
      `}
      ></div>
      <p
        className=" my-1 text-sm  2xl:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis text-center"
        style={{
          fontFamily: "IBM Plex Mono",
        }}
      >
        {title}
      </p>
    </OptionButtonBase>
  );
}

export default AvatarOptionButton;
