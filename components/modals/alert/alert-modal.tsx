"use client";

import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Modal } from "./modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}
export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title="Are you sure?"
      description="This Action Cannot be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Confirm
        </Button>

        <Button disabled={loading} onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
