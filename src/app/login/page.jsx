import LoginForm from "@/components/allform/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Login - IdeaVault",
};

const LoginPage = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto pt-15 pb-20">
      <h1 className="text-2xl text-center md:text-4xl font-bold">Login Now!</h1>
      <p className="text-gray-400 text-center">
        Welcome back! Place enter your details.
      </p>

      {/* register form */}
      <div className="">
        <LoginForm />
      </div>

      <p className="text-center mt-3 text-[15px] text-gray-400">
        {`Do't have an account?`}{" "}
        <Link href={"/register"} className="text-purple-400">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
