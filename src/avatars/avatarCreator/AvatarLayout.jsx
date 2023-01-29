import React from "react";
import HeaderAvatarCreator from "./HeaderAvatarCreator";
import AvatarSvg from "../avatarRender/AvatarSvg";
import AvatarInterface from "../../components/interfaces/avatarInterface/AvatarInterface";
import {  connect } from "react-redux";


function AvatarLayout({styleOptions, pathOptions}) {
  return (

    <div className=" h-screen flex flex-col">
      <HeaderAvatarCreator text="Create your custom avatar" />
      <main className="  flex-1 flex flex-col  sm:flex-row-reverse">
        <section className=" flex-1 bg-purple-500">
          <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
        </section>
      
      <section className=" flex-1 bg-orange-400 lg:w-2/5 lg:flex-none">
       <AvatarInterface/>
      </section>
      </main>
      
    </div>
    
  );
}



const mapStateToProps = state => ({
   styleOptions: state.avatarStyleSelector,
   pathOptions: state.avatarComponentSelector
})

export default connect(mapStateToProps)(AvatarLayout);

