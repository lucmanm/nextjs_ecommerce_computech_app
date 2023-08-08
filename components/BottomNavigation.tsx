import React from "react";

const BottomNavigation = () => {
    return (
        <div className="fixed bottom-4 left-0 z-50 h-16 w-full rounded-full border-t px-4 hover:rounded-full  tb:hidden">
            <div className="mx-auto grid h-full max-w-lg grid-cols-4 overflow-hidden rounded-full  bg-white font-medium ">
                <button
                    type="button"
                    className="group inline-flex flex-col items-center justify-center border-x border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                    <svg
                        className="mb-2 h-5 w-5 text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
                        Home
                    </span>
                </button>

                <button
                    type="button"
                    className="group inline-flex flex-col items-center justify-center border-r border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                    <svg
                        className="mb-2 h-5 w-5 text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="currentColor"
                            d="M6.5 11L12 2l5.5 9h-11Zm11 11q-1.875 0-3.188-1.313T13 17.5q0-1.875 1.313-3.188T17.5 13q1.875 0 3.188 1.313T22 17.5q0 1.875-1.313 3.188T17.5 22ZM3 21.5v-8h8v8H3ZM17.5 20q1.05 0 1.775-.725T20 17.5q0-1.05-.725-1.775T17.5 15q-1.05 0-1.775.725T15 17.5q0 1.05.725 1.775T17.5 20ZM5 19.5h4v-4H5v4ZM10.05 9h3.9L12 5.85L10.05 9ZM12 9Zm-3 6.5Zm8.5 2Z"
                        />
                    </svg>
                    <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
                        Category
                    </span>
                </button>
                <button
                    type="button"
                    className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <svg
                        className="mb-2 h-5 w-5 text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#172554"
                            d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
                        />
                    </svg>

                    <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
                        Cart
                    </span>
                </button>
                <button
                    type="button"
                    className="group inline-flex flex-col items-center justify-center  border-x border-gray-200 px-5 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
                    <svg
                        className="mb-2 h-5 w-5 text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <g fill="none">
                            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                            <path
                                fill="currentColor"
                                d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z"
                            />
                        </g>
                    </svg>
                    <span className="text-sm text-blue-950 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-950">
                        Menu
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BottomNavigation;
