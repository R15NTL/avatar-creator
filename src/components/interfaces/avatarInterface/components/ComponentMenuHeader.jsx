import React, { useState } from "react";
import Close from "../../../icons/Close";
import { useDispatch } from "react-redux";
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
    <header
      className="flex align-middle font-light bg-singlePlayer200 h-10 sticky top-0 z-20"
      style={{
        fontFamily: "IBM Plex Mono",
      }}
    >
      <section
        className={`flex-1 py-2 px-4 flex font-medium ${
          colorTitle ? "" : `hidden`
        }`}
      >
        <h1 className="flex-1">{colorTitle}</h1>
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

      <section className={`flex-1 py-2 flex ${componentTitle ? "" : `hidden`}`}>
        <h1 className="flex-1 font-medium px-4">{componentTitle}</h1>
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
