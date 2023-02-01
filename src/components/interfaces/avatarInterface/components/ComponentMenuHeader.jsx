import React, { useState } from "react";
import Close from "../../../icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../Redux";

function ComponentMenuHeader({ interFaceName, colorTitle, componentTitle }) {
  const dispatch = useDispatch();
  const { updateAvatarSelectionMenu } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [isHovered, setIsHovered] = useState(false);

  const closeButtonToShow = componentTitle ? 2 : 1;

  return (
    <header className="flex align-middle font-light bg-slate-600 h-10">
      <section className={`flex-1 p-2 flex ${colorTitle ? "" : `hidden`}`}>
        <h1 className="flex-1">{colorTitle}:</h1>
        <button
          className={closeButtonToShow === 1 ? "lg:hidden" : "hidden"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            updateAvatarSelectionMenu(null);
          }}
        >
          <Close color={isHovered ? "#9C59F5" : "#F1F1F1"} key={"frb849"} />
        </button>
      </section>
      <div className="w-px bg-slate-700"></div>
      <section className={`flex-1 p-2 flex ${componentTitle ? "" : `hidden`}`}>
        <h1 className="flex-1">{componentTitle}:</h1>
        <button
          className={closeButtonToShow === 2 ? "lg:hidden" : "hidden"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            updateAvatarSelectionMenu(null);
          }}
        >
          <Close hoverColor="#9C59F5" key={"rfb803"} />
        </button>
      </section>
    </header>
  );
}

export default ComponentMenuHeader;
