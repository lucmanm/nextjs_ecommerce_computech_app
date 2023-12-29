"use client"
import SignInForm from "@/components/block/SignInForm";
import SignUpForm from "@/components/block/SignUpForm";
import LoginModal from "@/components/modals/login-modal";
import { redirect } from "next/navigation";

type AuthenticationProps = {
  params: {
    signAuth: "sign-in" | "sign-up";
  };
};

const Authentication: React.FC<AuthenticationProps> = ({ params }) => {

  if (params.signAuth === "sign-in") {
    return (
      <LoginModal title="Login" >
        <SignInForm className="shadow-none w-full"/>
      </LoginModal>
    );
  } else if (params.signAuth === "sign-up") {
    return (
      <LoginModal title="Sign Up">
        <SignUpForm />
      </LoginModal>
    );
  } else {
    return redirect("/auth/sign-in");
  }
};

export default Authentication;
