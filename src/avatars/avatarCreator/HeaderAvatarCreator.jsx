import React from "react";

function HeaderAvatarCreator({ text }) {
  return (
    <header className=" h-10 bg-neutral-800 flex items-center relative">
      <h1 className=" inline-block mx-auto  text-lg font-medium tracking-wide text-light">
        {text}
      </h1>
    </header>
  );
}

export default HeaderAvatarCreator;
