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
      className={`${isActive && `bg-slate-600 dark:bg-[#6FD1D7] text-white`}
      
  text-[14px] font-medium dark:text-white  py-2 px-2 sm:px-3 rounded-xs hover:text-black dark:hover:text-white hover:bg-slate-300 dark:hover:bg-[#1d797e] duration-200
  `}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
