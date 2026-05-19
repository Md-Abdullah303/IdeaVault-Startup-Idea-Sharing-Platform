"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const RegisterForm = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (userData.password !== userData.confirmPass) {
      toast.error("Password are not much!");
      return;
    }

    console.log(userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      password: userData.password, // required
      image: userData.image,
      callbackURL: "/",
    });
    console.log("data , error", data, error);
    if (error) {
      toast.error(error?.message);
    } else if (data) {
      router.push("/");
      router.refresh("/");
      toast.success("Register Successful!");
    }
  };
  return (
    <div className=" flex flex-col items-center">
      <form
        className="flex mx-auto mt-10 max-w-140 border p-3 rounded-lg flex-col gap-4 dark:bg-[#2e3642]"
        onSubmit={onSubmit}
      >
        {/* name */}
        <TextField className="w-full " name="name" type="text">
          <Label>Name</Label>
          <Input
            className={
              "!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
            }
            placeholder="Enter your name"
          />
        </TextField>

        {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            className={
              "!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
            }
            placeholder="Enter your email"
          />
          <FieldError />
        </TextField>

        {/* image */}
        <TextField className="w-full " name="image" type="text">
          <Label>Image URI</Label>
          <Input
            className={
              "!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
            }
            placeholder="Enter your Image URI"
          />
        </TextField>

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
          <Label>Password</Label>
          <div className="relative  w-full ">
            <Input
              className={
                "w-full !bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
              }
              placeholder="Enter your password "
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
          <Label>Confirm</Label>
          <div className="relative  w-full ">
            <Input
              className={
                "w-full !bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
              }
              placeholder="Confirm Your Password"
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

        <div className="flex gap-2">
          <Button className={"w-full rounded-xs"} type="submit">
            Register
          </Button>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <hr className="w-[43%]" />
          <p className="text-gray-500">Or</p>
          <hr className="w-[43%]" />
        </div>
        <Button variant="outline" className={"w-full rounded-xs"}>
          <FcGoogle />
          Google Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
