"use client";
import { ReactNode, useState } from "react";

export default function Collaps({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-t border-b border-gray-200 overflow-hidden ${className}`}
    >
      <button
        className={`w-full px-[12px] py-[9px] text-left flex justify-between items-center 
                   ${isOpen ? "bg-white" : "bg-white hover:bg-gray-100"}
                   transition-colors duration-200`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="md:text-[18px] text-[16px] tracking-[0.15px] text-nonary uppercase font-medium ">
          {title}
        </span>
        <span className="text-lg w-8 h-8 border rounded-full flex justify-center items-center border-slate-300 text-gray-600">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <div className="p-4 bg-white text-nonary">{children}</div>}
    </div>
  );
}
