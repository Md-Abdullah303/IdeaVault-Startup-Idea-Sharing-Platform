import Image from "next/image";
import React from "react";
import logo from "@/assest/logo.png";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  const tabs = [
    { href: "/", name: "Home" },
    { href: "/ideas", name: "Ideas" },
    { href: "/add-idea", name: "Add Idea" },
    { href: "/my-idea", name: "My Idea" },
    { href: "/my-interactions", name: "My Interactions" },
  ];

  return (
    <div className="bg-blue-950 text-white py-10">
      <div className="w-[90%] md:container mx-auto px-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-start">
        <div className="space-y-3">
          {/* logo */}
          <div className="flex items-center gap-1 bg-white py-2 px-3 rounded-lg w-fit">
            <Image
              src={logo}
              alt="logo"
              width={400}
              height={300}
              className="w-7 md:w-8"
            />
            <h1 className="font-logo text-lg md:text-2xl font-bold text-slate-700">
              IdeaVault
            </h1>
          </div>
          <p className="text-[15px] text-gray-400">
            <span className="font-bold text-white">Short Description</span> :
            IdeaVault is a community-driven platform where creators share
            innovative ideas, discover inspiration, and connect with like-minded
            people.
          </p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Platform</h1>
          <div className="flex mt-4 flex-col items-start gap-2">
            {tabs.map((tab, ind) => (
              <Link
                key={ind}
                className="text-gray-400 hover:text-white"
                href={tab.href}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="flex mt-4 flex-col items-start gap-2">
            <p className="text-gray-400 hover:text-white">Email</p>
            <p className="text-gray-400 hover:text-white">Phone</p>
            <p className="text-gray-400 hover:text-white">Address</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">Social links</h1>
          <div className="flex mt-4 flex-row items-start gap-2">
            <p className="text-gray-400 text-2xl hover:text-white">
              <CiFacebook />
            </p>
            <p className="text-gray-400 text-2xl hover:text-white">
              <VscGithub />
            </p>
            <p className="text-gray-400 text-2xl hover:text-white">
              <FaLinkedin />
            </p>
            <p className="text-gray-400 text-2xl hover:text-white">
              <SiYoutube />
            </p>
            <p className="text-gray-400 text-2xl hover:text-white">
              <FaXTwitter />
            </p>
          </div>
        </div>
      </div>
      <div className="border-t w-[90%] md:container mx-auto px-3 border-gray-200 pt-3  mt-4">
        <p className="text-gray-400 text-xs text-center">
          &copy; IdeaVault. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
