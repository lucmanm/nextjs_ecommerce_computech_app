"use client"
import SignInForm from "@/components/block/SignInForm";
import SignUpForm from "@/components/block/SignUpForm";
import Modal from "@/components/modals/modal";
import usePreviewModal from "@/hook/use-preview-modal";
import { redirect } from "next/navigation";

type AuthenticationProps = {
  params: {
    signAuth: "sign-in" | "sign-up";
  };
};

const Authentication: React.FC<AuthenticationProps> = ({ params }) => {
 const previewmodal = usePreviewModal()

  if (params.signAuth === "sign-in") {
    return (
      <Modal open={true} onClose={previewmodal.onClose}>
        <SignInForm/>
      </Modal>
    );
  } else if (params.signAuth === "sign-up") {
    return (
      <Modal open={true} onClose={previewmodal.onClose}>
        <SignUpForm />
      </Modal>
    );
  } else {
    return redirect("/auth/sign-in");
  }
};

export default Authentication;
