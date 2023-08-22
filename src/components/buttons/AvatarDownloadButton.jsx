import React, { useRef } from "react";
import AvatarSvg from "../../avatars/avatarRender/AvatarSvg";
import { useSelector } from "react-redux";
import { cn } from "../../utils/tailwind";
import { Icon } from "@iconify/react";

function AvatarDownloadButton({ className }) {
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
      className={cn(
        "right-0 px-2 my-1 text-sm font-medium align-middle flex transition duration-200 ease-in-out border-neutral-800 border-2 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600",
        className
      )}
      onClick={downloadSvg}
    >
      <Icon
        icon="pixelarticons:arrow-bar-down"
        className=" self-center mr-1.5"
      />
      <span className="p-0 m-0 self-center  ">Download PNG</span>
      <div ref={svgRef} className="hidden w-48 h-48">
        <AvatarSvg styleOptions={styleOptions} pathOptions={pathOptions} />
      </div>
    </button>
  );
}

export default AvatarDownloadButton;
