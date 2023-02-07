import React from "react";
import {
  interfaceTree,
  styleOptions,
  pathOptions,
} from "../../../avatars/avatarCreator/avatarTree";
import AvatarColorOption from "../../buttons/AvatarColorOption";
import AvatarComponentOption from "../../buttons/AvatarComponentOption";
import ColorMenu from "./components/ColorMenu";
import { useSelector } from "react-redux";
import AvatarOptionMenu from "./components/AvatarOptionMenu";
import ComponentMenu from "./components/ComponentMenu";

function AvatarInterface() {
  const interfaceSelected = useSelector((state) => state.avatarSelectionMenu);
  return (
    <div className="flex-1 h-full flex">
      <div
        className={`flex-1   ${
          interfaceSelected !== null ? "max-lg:hidden" : ""
        }
      
      `}
      >
        <AvatarOptionMenu />
      </div>

      <div
        className={`flex-1 flex ${
          interfaceSelected === null ? "max-lg:hidden" : ""
        } `}
      >
        <ComponentMenu />
      </div>
    </div>
  );
}

export default AvatarInterface;
