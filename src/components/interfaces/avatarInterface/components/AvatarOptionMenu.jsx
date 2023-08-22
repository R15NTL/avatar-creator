import React from "react";
import { interfaceTree } from "../../../../avatars/avatarCreator/avatarTree";
import AvatarOptionButton from "../../../buttons/AvatarOptionButton";
import AvatarDownloadButton from "../../../buttons/AvatarDownloadButton";

function AvatarOptionMenu() {
  const optionButtons = Object.keys(interfaceTree).map(
    (interfaceName, index) => {
      return (
        <AvatarOptionButton
          iconViewBox={
            interfaceTree[interfaceName].iconViewBox || "0 0 512 512"
          }
          key={interfaceName}
          icon={interfaceTree[interfaceName].icon}
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
    <div className=" h-full flex flex-col">
      <header className=" flex h-10 font-light pl-2 bg-slate-600 sticky top-0">
        <h1 className="flex-1 py-2">Customize</h1>

        <AvatarDownloadButton />

        <div className=" w-px bg-slate-700"></div>
      </header>
      <div className="flex-1 flex">
        <div className="flex-1 h-fit overflow-auto grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 pt-2 pb-6 ">
          {optionButtons}
        </div>
        <div className="w-px bg-slate-600"></div>
      </div>
      <div></div>
    </div>
  );
}

export default AvatarOptionMenu;
