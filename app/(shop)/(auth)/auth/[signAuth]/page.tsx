import SignInForm from "@/components/block/SignInForm";
import SignUpForm from "@/components/block/SignUpForm";
import { redirect } from "next/navigation";

type AuthenticationProps = {
  params: {
    signAuth: "sign-in" | "sign-up";
  };
};

const Authentication: React.FC<AuthenticationProps> = ({ params }) => {
  if (params.signAuth === "sign-in") {
    return (
      <div className="m-4">
        <SignInForm />
      </div>
    );
  } else if (params.signAuth === "sign-up") {
    return (
      <div className="m-4">
        <SignUpForm />
      </div>
    );
  } else {
    return redirect("/auth/sign-in");
  }
};

export default Authentication;
