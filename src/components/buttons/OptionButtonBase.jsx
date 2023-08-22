import React, { useState } from "react";
import { cn } from "../../utils/tailwind";

export default function OptionButtonBase({
  isSelected,
  onClick,
  children,
  className,
  ...other
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    other.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
    other.onMouseLeave?.(e);
  };

  return (
    <div className="relative">
      <button
        {...other}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          `text-center border-2 p-2 z-10 relative w-full transition duration-200 ease-in-out  border-neutral-800 active:bg-singlePlayer300`,
          isSelected
            ? " bg-singlePlayer200  translate-x-1 translate-y-1"
            : "bg-neutral-50 ",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
      <span
        className={`absolute  inset-0 translate-x-1 translate-y-1 ${
          isHovering ? "bg-teal-300" : `bg-yellow-500`
        } ${isSelected ? "" : ""}`}
      />
    </div>
  );
}
