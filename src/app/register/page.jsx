import RegisterForm from "@/components/allform/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Register - IdeaVault",
};

const RegisterPage = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto pt-15 pb-20">
      <h1 className="text-2xl text-center md:text-4xl font-bold">Register</h1>

      {/* register form */}
      <div className="">
        <RegisterForm />
      </div>
      <p className="text-center mt-5 text-[13px] text-gray-400">
        By clicking register now, you agree to out{" "}
        <span className="underline">Terms of Service</span> and{" "}
        <span className="underline">Privacy Policy</span>
      </p>
      <p className="text-center mt-3 text-[15px] text-gray-400">
        Already have an account?{" "}
        <Link href={"/login"} className="text-purple-400">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
