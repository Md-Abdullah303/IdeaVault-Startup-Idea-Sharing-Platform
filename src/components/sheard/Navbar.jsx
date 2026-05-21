"use client";
import { useState } from "react";
import logo from "@/assest/logo.png";
import { RiMenuAddLine, RiMenuUnfold2Line } from "react-icons/ri";
import MyNavLink from "../Ui/MyNavLink";
import Image from "next/image";
import SwithThemeBtn from "../Ui/SwithThemeBtn";
import { useTheme } from "next-themes";
import LogoLinkBtn from "../Ui/LogoLinkBtn";
import { authClient } from "@/lib/auth-client";
import UserProfileDropdown from "./UserProfileDropdown";
import { Spinner } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();
  const userData = session?.user;

  const tabs = [
    { href: "/", name: "Home" },
    { href: "/ideas", name: "Ideas" },
    { href: "/add-idea", name: "Add Idea" },
    { href: "/my-idea", name: "My Idea" },
    { href: "/my-interactions", name: "My Interactions" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full shadow border-b border-separator bg-white dark-secondary">
      <header className="flex h-16 items-center justify-between gap-6 px-2 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              className="md:hidden "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* <span className="sr-only">Menu</span> */}

              {isMenuOpen ? (
                <RiMenuUnfold2Line
                  className={`text-xl dark:text-white ${theme == "dark" ? "text-black" : "text-black"}`}
                />
              ) : (
                <RiMenuAddLine
                  className={`text-xl dark:text-white ${theme == "dark" ? "text-black" : "text-black"}`}
                />
              )}
            </button>
            <LogoLinkBtn href={"/"}>
              <div className="flex items-center gap-1 dark:bg-white dark:py-1 dark:px-2 dark:rounded-xs sm:gap-1.5">
                <Image
                  src={logo}
                  alt="logo"
                  width={500}
                  height={400}
                  className="sm:w-8 w-5"
                />
                <h1 className="font-logo text-[15px] md:text-2xl font-bold text-slate-700">
                  IdeaVault
                </h1>
              </div>
            </LogoLinkBtn>
          </div>
          <ul className="hidden items-center  gap-2 md:flex">
            <li>
              <MyNavLink href={"/"}>Home</MyNavLink>
            </li>
            <li>
              <MyNavLink href={"/ideas"}>Ideas</MyNavLink>
            </li>
            {isPending ? (
              <Spinner color="accent" />
            ) : (
              userData && (
                <div className="hidden items-center  gap-2 md:flex ">
                  <li>
                    <MyNavLink href={"/add-idea"}>Add Idea</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink href={"/my-idea"}>My Idea</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink href={"/my-interactions"}>
                      My Interactions
                    </MyNavLink>
                  </li>
                </div>
              )
            )}
          </ul>
        </div>
        {/* right side */}
        <div className="">
          <ul className="flex items-center  gap-1">
            <SwithThemeBtn />

            {isPending ? (
              <div className="flex px-4 flex-col items-center gap-2">
                <Spinner color="success" />
              </div>
            ) : userData ? (
              <div className="">
                <UserProfileDropdown userData={userData} />
              </div>
            ) : (
              <ul className="flex items-center gap-1">
                <li>
                  <MyNavLink href={"/login"}>Login</MyNavLink>
                </li>
                <li>
                  <MyNavLink href={"/register"}>Register</MyNavLink>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </header>
      {isMenuOpen && (
        <div className={`border-t border-separator md:hidden `}>
          <ul className="grid grid-cols-2 gap-3 px-2 py-4">
            <li className={``} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MyNavLink href={"/"} className="block py-2">
                Home
              </MyNavLink>
            </li>
            <li className={``} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MyNavLink href={"/ideas"} className="block py-2">
                Ideas
              </MyNavLink>
            </li>
            {isPending ? (
              <Spinner color="accent" />
            ) : (
              userData && (
                <div className="grid grid-cols-2 gap-3 py-4 col-span-2">
                  <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MyNavLink href={"/add-idea"} className="block py-2">
                      Add Idea
                    </MyNavLink>
                  </li>
                  <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MyNavLink href={"/my-idea"} className="block py-2">
                      My Idea
                    </MyNavLink>
                  </li>
                  <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MyNavLink href={"/my-interactions"} className="block py-2">
                      My Interactions
                    </MyNavLink>
                  </li>
                </div>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
