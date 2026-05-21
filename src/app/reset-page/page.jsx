"use client";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ResetPage = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [inputSearch1, setInputSearch1] = useState("");
  const [inputSearch2, setInputSearch2] = useState("");

  const handleSave = () => {
    if (showPass === showPass2) {
      router.push("/login");
      toast.success("Your password was chang..");
    } else {
      toast.error("Passwords are not same");
    }
  };

  return (
    <div className="w-[90%] px-3 md:w-[70%] mx-auto mt-20 mb-25">
      <h2 className="text-2xl text-center font-bold">
        Create Your New Password
      </h2>
      <p className="text-gray-400 mb-10 text-center">Enter Your New Password</p>
      <div className="max-w-3xl mx-auto">
        {/* password */}
        <TextField
          isRequired
          minLength={6}
          name="password"
          type={`${showPass ? "text" : "password"}`}
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Enter Your New Password</Label>
          <div className="relative  w-full ">
            <Input
              value={inputSearch1}
              onChange={(e) => setInputSearch1(e.target.value)}
              className={
                "w-full !bg-slate-100 border shadow-none border-gray-200 dark:!border-gray-600 dark:!bg-gray-700 rounded-xs outline-none"
              }
              placeholder="Input your password "
            />
            {showPass ? (
              <IoEyeOutline
                onClick={() => setShowPass(!showPass)}
                className="absolute top-2 right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setShowPass(!showPass)}
                className="absolute top-2 right-3 cursor-pointer"
              />
            )}
          </div>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* confirm */}
        <TextField
          isRequired
          minLength={6}
          name="confirmPass"
          type={`${showPass2 ? "text" : "password"}`}
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Confirm New Password</Label>
          <div className="relative  w-full ">
            <Input
              value={inputSearch2}
              onChange={(e) => setInputSearch2(e.target.value)}
              className={
                "w-full !bg-slate-100 border shadow-none border-gray-200 dark:!border-gray-600 dark:!bg-gray-700 rounded-xs outline-none"
              }
              placeholder="Input Your Password"
            />
            {showPass ? (
              <IoEyeOutline
                onClick={() => setShowPass2(!showPass2)}
                className="absolute top-2 right-3 cursor-pointer"
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => setShowPass2(!showPass2)}
                className="absolute top-2 right-3 cursor-pointer"
              />
            )}
          </div>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
      </div>

      <Button className={"rounded-lg mt-2"} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default ResetPage;
