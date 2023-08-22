import React, { useRef } from "react";
import AvatarSvg from "../../avatars/avatarRender/AvatarSvg";
import { useSelector } from "react-redux";
import { BsDownload } from "react-icons/bs";

function AvatarDownloadButton() {
  const svgRef = useRef();
  const styleOptions = useSelector((state) => state.avatarStyleSelector);
  const pathOptions = useSelector((state) => state.avatarComponentSelector);

  const downloadSvg = () => {
    const svgData = svgRef.current.innerHTML;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
    img.onload = function () {
      canvas.width = 500;
      canvas.height = 500;
      ctx.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "avatar.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
  };
  return (
    <button
      className="right-0 p-2 m-1 text-sm align-middle flex
      transition duration-200 ease-in-out border-neutral-800 border-2
      bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 "
      onClick={downloadSvg}
    >
      <div className=" flex-1 mr-2 ">
        <BsDownload />
      </div>{" "}
      <p className="flex-1 p-0 m-0 self-center whitespace-nowrap align-middle font-medium">
        Download PNG
      </p>
      <div ref={svgRef} className="hidden w-48 h-48">
        <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
      </div>
    </button>
  );
}

export default AvatarDownloadButton;
