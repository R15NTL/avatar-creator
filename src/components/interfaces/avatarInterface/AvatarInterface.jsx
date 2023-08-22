import React from "react";
import { useSelector } from "react-redux";
import AvatarOptionMenu from "./components/AvatarOptionMenu";
import ComponentMenu from "./components/ComponentMenu";

function AvatarInterface() {
  const interfaceSelected = useSelector((state) => state.avatarSelectionMenu);
  return (
    <div className="flex-1 h-full flex relative">
      <div
        className={`flex-1   ${
          interfaceSelected !== null ? "max-lg:hidden" : ""
        }
      
      `}
      >
        <AvatarOptionMenu />
      </div>

      <div
        className={`flex-1 flex bg-neutral-200 ${
          interfaceSelected === null ? "max-lg:hidden" : ""
        } `}
      >
        <ComponentMenu />
      </div>
    </div>
  );
}

export default AvatarInterface;
