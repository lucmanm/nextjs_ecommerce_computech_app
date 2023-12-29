"use client";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

type LoginModalProps = {
  children: React.ReactNode;
  title: string;
};

const LoginModal: React.FC<LoginModalProps> = ({ children, title }) => {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <h1 className="h1 text-center">{title}</h1>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
