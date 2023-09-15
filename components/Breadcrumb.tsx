import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div
      className="flex rounded-lg border bg-white px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ml-2"
            >
              Product
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
