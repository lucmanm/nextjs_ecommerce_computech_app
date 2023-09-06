import React from "react";

interface ContainerProps {
  title?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <div className="space-y-4 px-10 py-6">
      <div className="rounded-lg bg-white px-4 py-2 text-xl font-bold">
        {title}
      </div>
      <div className="rounded-lg bg-white px-4 py-2 text-xl font-bold">
        {children}
      </div>
    </div>
  );
};

export default Container;
