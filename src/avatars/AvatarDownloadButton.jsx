import React, { useRef } from "react";
import AvatarSvg from "./avatarRender/AvatarSvg";
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
      className="fixed top-0 right-0 h-10 p-2 text-light"
      onClick={downloadSvg}
    >
      <BsDownload />
      <div ref={svgRef} className="hidden w-48 h-48">
        <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
      </div>
    </button>
  );
}

export default AvatarDownloadButton;
