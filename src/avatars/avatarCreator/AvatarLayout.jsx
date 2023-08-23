import React from "react";
import HeaderAvatarCreator from "./HeaderAvatarCreator";
import AvatarSvg from "../avatarRender/AvatarSvg";
import AvatarInterface from "../../components/interfaces/avatarInterface/AvatarInterface";
import { connect } from "react-redux";
import AvatarDownloadButton from "../../components/buttons/AvatarDownloadButton";

function AvatarLayout({ styleOptions, pathOptions }) {
  return (
    <div className=" h-screen flex flex-col bg-neutral-50 text-neutral-800">
      <main className=" pt-10 h-screen flex-1 grid grid-rows-2  sm:grid-cols-2">
        <div className=" fixed top-0 w-screen z-30">
          <HeaderAvatarCreator text="Create your custom avatar" />
        </div>
        <section className=" row-span-1 bg-light flex sm:col-span-1 sm:row-span-2 sm:hidden">
          <div className="w-9 phone-sm:w-16 phone-lg:w-28 phone-xl:w-40 "></div>
          <div className=" flex-1 my-auto mx-auto sm:max-w-full place-items-center grid">
            <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
          </div>
          <div className=" w-9 phone-sm:w-16 phone-lg:w-28 phone-xl:w-40 "></div>
        </section>

        <section className=" row-span-1 sm:col-span-1 sm:row-span-2 flex overflow-hidden">
          <AvatarInterface />
        </section>
        <section className=" max-sm:hidden sm:col-span-1 sm:row-span-2 bg-neutral-50 p-16 pt-26 relative">
          <header
            className=" absolute left-0 py-1 w-full h-10 top-0 bg-singlePlayer200 px-4 flex items-center font-medium"
            style={{
              fontFamily: "IBM Plex Mono",
            }}
          >
            <p>Preview</p>
            <AvatarDownloadButton className="ml-auto h-full hidden sm:flex " />
          </header>
          <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  styleOptions: state.avatarStyleSelector,
  pathOptions: state.avatarComponentSelector,
});

export default connect(mapStateToProps)(AvatarLayout);
