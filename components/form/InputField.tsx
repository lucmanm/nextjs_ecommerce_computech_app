

interface inputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  required?: true;
}

const InputField = ({name,placeholder,type,required}: inputFieldProps) => {
  return (
    <div className="group relative z-0 mb-6 w-full ">
      <input
        type={type}
        name={name}
        id={name}
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-950 focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
        placeholder=" "
        required={required}
      />
      <label
        htmlFor={name}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-950  peer-focus:dark:text-blue-500"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
