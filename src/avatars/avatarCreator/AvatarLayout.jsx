import React from "react";
import HeaderAvatarCreator from "./HeaderAvatarCreator";
import AvatarSvg from "../avatarRender/AvatarSvg";
import AvatarInterface from "../../components/interfaces/avatarInterface/AvatarInterface";
import { connect } from "react-redux";

function AvatarLayout({ styleOptions, pathOptions }) {
  return (
    <div className=" h-screen flex flex-col bg-slate-700 text-light">
      <HeaderAvatarCreator text="Create your custom avatar" />
      <main className="  flex-1 flex flex-col  sm:flex-row-reverse">
        <section className=" flex-1 bg-purple-500 ">
          <div
            className=" my-auto mx-auto sm:max-w-full"
            style={{ maxWidth: "275px" }}
          >
            <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
          </div>
        </section>

        <section className=" flex-1 lg:w-3/5 flex ">
          <AvatarInterface />
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
