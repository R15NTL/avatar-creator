import React from "react";

function HeaderAvatarCreator({ text }) {
  return (
    <header className=" h-10 bg-slate-900 flex items-center">
      <h1 className=" inline-block mx-auto font-light text-lg text-light">
        {text}
      </h1>
    </header>
  );
}

export default HeaderAvatarCreator;
