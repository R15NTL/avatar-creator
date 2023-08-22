import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux";

function AvatarOptionButton({ icon, title, buttonIndex }) {
  const clickedButtonIndex = useSelector((state) => state.avatarSelectionMenu);
  const dispatch = useDispatch();
  const { updateAvatarSelectionMenu } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [hover, setHover] = useState(false);

  const isSelected = clickedButtonIndex === buttonIndex;

  return (
    <div className="relative m-2">
      <button
        className={`text-center border  p-1 z-10 relative w-full
    transition duration-200 ease-in-out
    hover:bg-slate-600  border-slate-500
    active:bg-singlePlayer550  
    ${
      isSelected
        ? " bg-singlePlayer200 hover:bg-singlePlayer100 translate-x-1 translate-y-1"
        : "bg-neutral-50 hover:bg-neutral-200 "
    }
    `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          if (clickedButtonIndex === buttonIndex) {
            updateAvatarSelectionMenu(null);
            return;
          }
          updateAvatarSelectionMenu(buttonIndex);
        }}
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
        mt-2 h-wire-frame rounded-sm transition duration-200 ease-in-out
      ${
        hover
          ? clickedButtonIndex === buttonIndex
            ? "bg-singlePlayer250"
            : "bg-slate-500"
          : clickedButtonIndex === buttonIndex
          ? "bg-singlePlayer400"
          : "bg-slate-500"
      }
      `}
        ></div>
        <p className=" my-1 font-light text-sm">{title}</p>
      </button>
      <span
        className={`absolute bg-yellow-500 inset-0 translate-x-1 translate-y-1 ${
          isSelected ? "" : ""
        }`}
      />
    </div>
  );
}

export default AvatarOptionButton;
