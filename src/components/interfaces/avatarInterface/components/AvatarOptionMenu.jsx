import React from "react";
import { interfaceTree } from "../../../../avatars/avatarCreator/avatarTree";
import AvatarOptionButton from "../../../buttons/AvatarOptionButton";

function AvatarOptionMenu() {
  const optionButtons = Object.keys(interfaceTree).map(
    (interfaceName, index) => {
      return (
        <AvatarOptionButton
          key={interfaceName}
          iconComponentIndex={interfaceTree[interfaceName].iconComponentIndex}
          iconComponentName={interfaceTree[interfaceName].iconComponentName}
          title={interfaceTree[interfaceName].title}
          buttonIndex={index}
        />
      );
    }
  );
  return (
    <div>
      <h1>Options</h1>
      <div className=" grid grid-cols-3 ">{optionButtons}</div>
    </div>
  );
}

export default AvatarOptionMenu;
