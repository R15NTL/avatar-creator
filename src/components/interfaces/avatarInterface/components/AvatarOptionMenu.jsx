import React from "react";
import { interfaceTree } from "../../../../avatars/avatarCreator/avatarTree";
import AvatarOptionButton from "../../../buttons/AvatarOptionButton";

function AvatarOptionMenu() {
  const optionButtons = Object.keys(interfaceTree).map(
    (interfaceName, index) => {
      return (
        <AvatarOptionButton
          iconViewBox={
            interfaceTree[interfaceName].iconViewBox || "0 0 512 512"
          }
          key={interfaceName}
          iconComponentIndex={interfaceTree[interfaceName].iconComponentIndex}
          iconComponentName={interfaceTree[interfaceName].iconComponentName}
          title={
            interfaceTree[interfaceName].title ||
            interfaceTree[interfaceName].colorTitle
          }
          buttonIndex={index}
        />
      );
    }
  );
  return (
    <div className="">
      <h1 className=" h-10 font-light py-2 pl-2 bg-slate-600">Customize:</h1>

      <div className=" grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 ">
        {optionButtons}
      </div>
    </div>
  );
}

export default AvatarOptionMenu;
