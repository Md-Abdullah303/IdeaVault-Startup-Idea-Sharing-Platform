"use client";
import React from "react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const UserProfileDropdown = ({ userData }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  // console.log(userData);
  const { name, email, image } = userData;
  return (
    <div className="flex items-center pl-1 gap-2.5">
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar>
            <Avatar.Image
              className="bg-center bg-cover"
              alt={name}
              src={image}
            />
            {/* <Image
              width={600}
              height={500}
              className="bg-center bg-cover w-full rounded-full"
              alt={name}
              src={image}
            /> */}
            <Avatar.Fallback delayMs={600}>
              {name.toUpperCase()[(0, 2)]}
            </Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover className={"space-y-3 -ml-5"}>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image alt={name} src={image} />
                <Avatar.Fallback delayMs={600}>
                  {name.toUpperCase()[(0, 2)]}
                </Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{name}</p>
                <p className="text-xs leading-none text-muted">{email}</p>
              </div>
            </div>
          </div>
          <Dropdown.Menu className="space-y-3 px-3">
            <Dropdown.Item
              onClick={handleProfile}
              id="profile"
              textValue="Profile"
            >
              <Label className="w-full">Profile</Label>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleLogout}
              id="logout"
              textValue="Logout"
              variant="danger"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <Label>Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-danger" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default UserProfileDropdown;
