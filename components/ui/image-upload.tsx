"use clinet";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-24">
      <div className="md-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative flex h-28 w-28  overflow-hidden rounded-md"
          >
            <Button
              type="button"
              onClick={() => onRemove(url)}
              variant="destructive"
              size="sm"
              className="absolute right-2 top-2 z-10"
            >
              <Trash className="h-4 w-4" />
            </Button>
            <Image
              width={800}
              height={800}
              className="object-center"
              alt="Image"
              src={url}
            />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="qmfqcrr1">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              type="button"
              disabled={disabled}
              variant="default"
              onClick={onClick}
            >
              <ImagePlus className="mr-2 h-4 w-4" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
