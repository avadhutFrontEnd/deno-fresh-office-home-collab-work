import Navbar from "../../../components/AppLayoutComponents/Navbar.tsx";
import Sidebar from "../../../islands/AppLayoutIslands/sider-bar.tsx";
import Unit from "./index.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            <Unit>
                <div class=" px-6 pt-6 flex flex-col h-full w-full ">
                    <ol class="relative border-s border-gray-200 dark:border-gray-700">
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <span class="hover:text-red-600 text-green-400 m-2 text-lg font-semibold  dark:text-white">STEP 1 :</span > <span class="text-lg font-semibold  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Download the Template File </span>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima adipisci voluptatibus corrupti iusto, sunt ipsa animi porro aliquid.</p>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><div class="pr-2 ">Download </div><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="mr-1 h-6 w-6">
                                <path
                                    fill-rule="evenodd"
                                    d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                                    clip-rule="evenodd" />
                            </svg></a>
                        </li>

                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <span class="hover:text-red-600 text-green-400 m-2 text-lg font-semibold  dark:text-white">STEP 2 :</span > <span class="text-lg font-semibold  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Fill All Details </span>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima adipisci voluptatibus corrupti iusto, sunt ipsa animi porro aliquid.</p>

                        </li>

                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <span class="hover:text-red-600 text-green-400 m-2 text-lg font-semibold  dark:text-white">STEP 3 :</span > <span class="text-lg font-semibold  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Upload the Updated  Template File </span>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><div class="pr-2 ">Upload </div> <svg
                                class="w-6 h-6 "
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg></a>
                        </li>
                    </ol>
                </div>
            </Unit>
        </>
    );
}