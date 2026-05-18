"use client";
import { useState } from "react";
import { Link } from "@heroui/react";
import logo from "@/assest/logo.png";
import { RiMenuAddLine, RiMenuUnfold2Line } from "react-icons/ri";
import MyNavLink from "../Ui/MyNavLink";
import Image from "next/image";
import SwithThemeBtn from "../Ui/SwithThemeBtn";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { href: "/", name: "Home" },
    { href: "/ideas", name: "Ideas" },
    { href: "/add-idea", name: "Add Idea" },
    { href: "/my-idea", name: "My Idea" },
    { href: "/my-interactions", name: "My Interactions" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full shadow border-b border-separator bg-white ">
      <header className="flex h-16 items-center justify-between gap-6  px-6">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* <span className="sr-only">Menu</span> */}

              {isMenuOpen ? (
                <RiMenuUnfold2Line className="text-xl" />
              ) : (
                <RiMenuAddLine className="text-xl" />
              )}
            </button>
            <div className="flex items-center gap-1.5">
              <Image
                src={logo}
                alt="logo"
                width={500}
                height={400}
                className="w-8"
              />
              <h1 className="font-logo text-xl md:text-2xl font-bold text-slate-700">
                IdeaVault
              </h1>
            </div>
          </div>
          <ul className="hidden items-center gap-2 md:flex">
            {tabs.map((tab, ind) => (
              <li key={ind}>
                <MyNavLink href={tab.href}>{tab.name}</MyNavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center gap-1">
            <SwithThemeBtn />
            <li>
              <MyNavLink href={"/login"}>Login</MyNavLink>
            </li>
            <li>
              <MyNavLink href={"/register"}>Register</MyNavLink>
            </li>
          </ul>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
