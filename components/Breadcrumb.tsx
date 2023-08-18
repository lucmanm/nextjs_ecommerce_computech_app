import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
    return (
        // <!-- Breadcrumb -->
        <nav
            className="flex rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800"
            aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <ChevronRight />
                        <a
                            href="#"
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ml-2">
                            Templates
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <ChevronRight />
                        <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2">
                            Flowbite
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
