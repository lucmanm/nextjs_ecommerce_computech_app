import React from "react";

interface ButtonProps {
  className?: string;
}

const Button = ({ className }: ButtonProps) => {

  return (
    <button
      type="button"
      className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
    >
      Save
    </button>
  );
};

export default Button;
