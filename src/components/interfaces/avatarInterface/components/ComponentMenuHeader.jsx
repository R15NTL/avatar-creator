import React from "react";
import CloseButton from "../../../buttons/CloseButton";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../Redux";

function ComponentMenuHeader({ interFaceName, colorTitle, componentTitle }) {
  const dispatch = useDispatch();
  const { updateAvatarSelectionMenu } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const closeButtonToShow = componentTitle ? 2 : 1;

  return (
    <header
      className="flex align-middle font-light bg-singlePlayer200 h-10 sticky top-0 z-20"
      style={{
        fontFamily: "IBM Plex Mono",
      }}
    >
      <div
        className={`flex-1 py-2 px-4 flex font-medium ${
          colorTitle ? "" : `hidden`
        }`}
      >
        <h1 className="flex-1">{colorTitle}</h1>
        <CloseButton
          className={closeButtonToShow === 1 ? "lg:hidden" : "hidden"}
          onClick={() => {
            updateAvatarSelectionMenu(null);
          }}
        />
      </div>

      <div
        className={`flex-1 py-2 flex px-4 ${componentTitle ? "" : `hidden`}`}
      >
        <h1 className="flex-1 font-medium">{componentTitle}</h1>
        <CloseButton
          className={closeButtonToShow === 2 ? "lg:hidden" : "hidden"}
          onClick={() => {
            updateAvatarSelectionMenu(null);
          }}
        />
      </div>
    </header>
  );
}

export default ComponentMenuHeader;
