"use client";
import { Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiUser } from "react-icons/ci";

const ForgotPage = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const handleSend = () => {
    console.log("object");
    if (input) {
      toast.success("loading...");
      redirect("/reset-page");
    } else {
      toast.error("Enter your email or phone number!!");
    }
  };

  return (
    <div className="w-[90%] px-3 md:w-[70%] mx-auto mt-20 mb-15">
      <div className="text-center space-y-2">
        <h1 className="text-blue-500 text-2xl font-bold">Forgot Password</h1>
        <p className="text-lg text-center text-gray-500">
          Enter Your Email Or Phone Number To Reset Your Password Quickly.
        </p>
      </div>
      <div className="flex max-w-lg mx-auto items-center gap-2 border py-2 px-4 rounded-lg mt-10 dark:border dark:border-gray-600">
        <CiUser />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text email"
          placeholder="Email or phone number"
          className="outline-none"
        />
      </div>
      <div className="flex justify-center mt-6 ">
        <Button className={"rounded-lg"} onClick={handleSend} variant="primary">
          Send
        </Button>
      </div>
    </div>
  );
};

export default ForgotPage;
