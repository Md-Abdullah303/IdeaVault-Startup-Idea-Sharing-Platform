"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, children }) => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  //   console.log(path);
  const isActive = path === href;

  return (
    <Link
      className={`${isActive && `bg-slate-600 text-white`}
      ${theme == "dark" ? "text-black" : "text-black"}
  text-[16px] font-medium py-2 px-3 rounded-xs hover:text-black hover:bg-slate-300 duration-200
  `}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
