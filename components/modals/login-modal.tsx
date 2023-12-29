"use client"
import { Dialog, DialogContent } from "../ui/dialog";

const LoginModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog modal >
      <DialogContent className="z-50">{children}</DialogContent>
    </Dialog>
  );
};

export default LoginModal;
