import React from "react";
import { cn } from "../../utils/tailwind";

export default function OptionButtonBase({
  isSelected,
  onClick,
  children,
  className,
  ...props
}) {
  return (
    <div className="relative">
      <button
        {...props}
        className={cn(
          `text-center border p-2 z-10 relative w-full transition duration-200 ease-in-out hover:bg-slate-600 border-slate-500 active:bg-singlePlayer300`,
          isSelected
            ? " bg-singlePlayer200 hover:bg-singlePlayer100 translate-x-0.5 translate-y-0.5"
            : "bg-neutral-50 hover:bg-neutral-200",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
      <span
        className={`absolute bg-yellow-500 inset-0 translate-x-1 translate-y-1 ${
          isSelected ? "" : ""
        }`}
      />
    </div>
  );
}
