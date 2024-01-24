import { useSignal } from "@preact/signals";
import Sidebar from "../../../../islands/sidebar.tsx";
import Buttons from "../../../../islands/buttons.tsx";
import { useEffect } from "preact/hooks";
import { useState } from "preact/hooks";

export function Review() {
    const societyObject = useSignal([]);
    const siderbarObject = useSignal([]);
    const [object , setObject] = useState([]);

    const societyObjectFunction = (societyObjectArrayPara: any[]) => {
        siderbarObject.value = societyObjectArrayPara;
        // console.log(" After  : ",siderbarObject.value);
        // console.log("Print", siderbarObject.value);
        setObject(societyObjectArrayPara);
        console.log("Review",  object );
    };

    return (
        <>
            <section class=" h-full w-2/3  ">
                {/* File Upload box */}
                <div class=" h-1/3 w-full px-4 pt-4 ">
                    <div class=" h-full w-full p-4 bg-gray-100 opacity-80 rounded-md hover:shadow-lg">
                        {/* Heading */}
                        <ul class="h-1/6 my-2">
                            <li>
                                <div class="flex items-baseline  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <svg class="w-6 h-6  mx-2 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap text-2xl ">Building Details</span>
                                </div>
                            </li>
                            <li>
                                <p class=" text-xs font-normal text-gray-500 dark:text-gray-400">Download Building Details CSV File, Fill All Fields and Upload that CSV File and take a Review of it.</p>
                            </li>
                            <Buttons societyObject={societyObject} societyObjectFunction={societyObjectFunction} ></Buttons>
                        </ul>
                    </div>

                    {/* */}
                </div>

                {/*  Part 3 :    */}
                {/*----------------- Class = main */}
                <section class="h-2/3 w-full p-4 ">
                    <div class="flex flex-row  h-full w-full p-4 bg-gray-100 opacity-80   rounded-md hover:shadow-lg">
                        <Sidebar siderbarObject={siderbarObject} object={object}  />
                    </div>
                </section>
            </section>
        </>
    );
}
