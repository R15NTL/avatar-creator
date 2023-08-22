import React from "react";
import { cn } from "../../utils/tailwind";
import { Icon } from "@iconify/react";

export default function CloseButton({ className, ...other }) {
  return (
    <button
      {...other}
      className={cn(
        "w-6 h-6 bg-yellow-500 hover:bg-teal-100 border-2 border-neutral-800 flex items-end justify-center text-center",
        className
      )}
    >
      <Icon
        icon="pixelarticons:close"
        className="text-neutral-800 w-full h-full"
      />
    </button>
  );
}
