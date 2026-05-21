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
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(callbackUrl);

    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      callbackURL: callbackUrl,
    });
    // console.log(data, error);
    if (error) {
      toast.error(error?.message);
    } else if (data) {
      toast.success("Login Successful!");
      // router.push(callbackUrl || "/");
    }
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
    // console.log(data);
  };

  return (
    <div>
      <form
        className="flex mx-auto dark-form mt-10 max-w-120  border p-3 rounded-lg flex-col gap-4"
        onSubmit={onSubmit}
      >
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
              "w-full !bg-slate-100 border shadow-none border-gray-200 dark:!border-gray-500 dark:!bg-gray-700 rounded-xs outline-none"
            }
            placeholder="Enter your email"
          />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
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
          <Input
            className={
              "w-full !bg-slate-100 border shadow-none border-gray-200 dark:!border-gray-500 dark:!bg-gray-700 rounded-xs outline-none"
            }
            placeholder="Enter your password"
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="text-blue-400 text-end">
          <Link href={"/forgot-page"}>Forgot password?</Link>
        </div>
        <div className="flex gap-2">
          <Button className={"w-full rounded-xs"} type="submit">
            Login
          </Button>
          {/* <Button type="reset" variant="secondary">
          Reset
        </Button> */}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <hr className="w-[43%]" />
          <p className="text-gray-500">Or</p>
          <hr className="w-[43%]" />
        </div>
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className={"w-full rounded-xs"}
        >
          <FcGoogle />
          Google login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
