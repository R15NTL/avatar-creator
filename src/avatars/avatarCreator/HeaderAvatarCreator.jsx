import React from "react";
import AvatarDownloadButton from "../AvatarDownloadButton";

function HeaderAvatarCreator({ text }) {
  return (
    <header className=" h-10 bg-slate-900 flex items-center">
      <h1 className=" inline-block mx-auto font-light text-lg text-light">
        {text}
      </h1>
      <AvatarDownloadButton />
    </header>
  );
}

export default HeaderAvatarCreator;
