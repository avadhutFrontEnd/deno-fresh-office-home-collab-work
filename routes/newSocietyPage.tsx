import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
// import Instruction from "../components/instruction.tsx";
// import { TiTick } from "react-icons/ti";
// import "./stepper.css";
import { Head } from "$fresh/runtime.ts"

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: PageProps) {
    const count = useSignal(0);
    const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
    const currentStep = useSignal(2);
    const complete = useSignal(false);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="stepper.css" />
            </Head>
            <div class="flex flex-col h-[95vh] bg-gray-100">
                {/* Navbar */}
                <div class="flex flex-row justify-evenly h-fit w-full px-4 border-b-4 border-white">
                    <section class="  text-white sticky top-0 z-50 ">
                        <div class=" h-[72px]  w-screen flex flex-row justify-between bg-gradient-to-r from-blue-400 to-blue-500 ... ">

                            <div class="">
                                <h1 class="mx-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-auto mb-auto">
                                    <div class="flex flex-row justify-center"> <img src="/communities.png" class="mx-2" /> <span class="text-6xl items-center text-white">Chaos</span></div>
                                </h1>
                            </div>

                            <div class="flex flex-row items-center pr-3">
                                <ul
                                    role="list"
                                    class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 flex flex-row "
                                >
                                    <li class="py-3 sm:py-4 mx-2">
                                        <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                            {/* <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"> */}
                                            <img src="/settings.png" class=" mx-1 h-12" />
                                            <span class=" text-4xl"> Initial Setup </span>
                                            {/* </span> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Content */}
                <div class="flex flex-row h-[90%]  w-full bg-gray-100">
                    {/* Left side : Progress Tracking and Fill data Show */}
                    <div class=" flex flex-col h-full w-5/12 ">
                        {/* change Hiiden ----> to ---->  flex */}
                        <div class="hidden  h-full w-full">
                            {/* Mile-stone */}
                            <div class="flex flex-col h-full px-4 mb-1 ">
                                <ol class=" flex flex-col h-full w-fit sm:flex">

                                    <li class="h-3/6 ">
                                        <div class="flex flex-col h-full items-center justify-center ">
                                            {/* Line */}
                                            {/* <div class=" sm:flex h-20 bg-white w-0.5 dark:bg-gray-700"></div> */}
                                            {/* Icon */}
                                            <a href="/setUpPages/societyDetails" class="relative" >
                                                <button
                                                    // onClick={() => {
                                                    //     count.value = 1
                                                    //     console.log(`onclick:`,count.value);
                                                    //     console.log(`onclick:`);
                                                    // }}

                                                    class="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full  border-2 border-solid border-blue-700 shrink-0  hover:bg-blue-700 font-bold p-2 focus:transition-all duration-10000 focus:ease-linear focus:bg-red-500  focus:outline-none focus:border-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  text-lg focus:text-white  text-blue-800 dark:text-white hover:text-white ">
                                                    {/* <img src="/registerninesix.png" class="w-20" alt="" /> */}
                                                    1
                                                </button>
                                            </a>
                                            {/* Line */}
                                            <div class=" sm:flex h-full bg-blue-700 w-0.5 dark:bg-gray-700"></div>
                                        </div>
                                    </li>

                                    <li class="h-3/6 ">
                                        <div class="flex flex-col h-full items-center ">
                                            {/* Line */}
                                            {/* <div class=" sm:flex h-40 bg-white w-0.5 dark:bg-gray-700"></div> */}
                                            {/* Icon */}
                                            <a href="/setUpPages/societyDetails">
                                                <button
                                                    // onClick={() => {
                                                    //     count.value = 1
                                                    //     console.log(`onclick:`,count.value);
                                                    //     console.log(`onclick:`);
                                                    // }}

                                                    class="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full  border-2 border-solid border-blue-700 shrink-0  hover:bg-blue-700 font-bold p-2 focus:transition-all duration-10000 focus:ease-linear focus:bg-red-500  focus:outline-none focus:border-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  text-lg focus:text-white  text-blue-800 dark:text-white hover:text-white ">
                                                    {/* <img src="/registerninesix.png" class="w-20" alt="" /> */}
                                                    2
                                                </button>
                                            </a>
                                            {/* Line */}
                                            <div class=" sm:flex h-full bg-blue-700 w-0.5 dark:bg-gray-700"></div>
                                        </div>
                                    </li>
                                </ol>
                            </div>


                            {/* Display Content */}
                            <div class="flex flex-col h-full px-4 mb-1   border-2 border-solid border-blue-600 rounded-md">
                                <ol class=" flex flex-col h-full w-full sm:flex   "> {/* w-fit border-2 border-solid border-red-600*/}
                                    {/* Step 1 - list item 1  */}
                                    <li class=" h-[8%] mt-2 mb-1">
                                        <div class=" h-full border-2 border-solid border-blue-600 rounded-md" >   {/*  */}
                                            <span class="hover:text-red-600 text-green-400 m-2 text-lg font-semibold  dark:text-white">STEP 1 :</span > <span class="text-lg font-semibold  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Click on the Above <span class="text-blue-600 dark:text-blue-500"> STEP 1 </span>and Create Society </span>
                                        </div>
                                    </li>
                                    {/* Step 1 - list item 2  */}
                                    <li class="  h-[84%] my-1">  {/* border-2 border-solid border-red-600/}
                                        {/* Header "Red" */}
                                        <div class="flex flex-col  h-full   rounded-md  border-2 border-solid border-blue-600 "> {/* */}
                                            {/* Content Area */}
                                            <div class=" h-full p-4 bg-white  rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 ">  {/* border-2 border-solid border-green-600 */}

                                                {/* Dynamicly generate Data in these Below <li> */}
                                                <ol class=" overflow-y-scroll  h-full relative border-s border-2 border-solid border-red-200   dark:border-gray-700">   {/* Last div -> in these Div all <li> items list comes */}
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
                                        </div>
                                    </li>
                                    {/* Step 2 - list item 1  */}
                                    <li class=" h-[8%]  mt-1 mb-2 ">
                                        <div class=" h-full border-2 border-solid border-blue-600 rounded-md" >   {/*  */}
                                            <span class="hover:text-red-600 text-green-400 m-2 text-lg font-semibold  dark:text-white">STEP 1 :</span > <span class="text-lg font-semibold  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Click on the Above <span class="text-blue-600 dark:text-blue-500"> STEP 1 </span>and Create Society </span>
                                        </div>
                                    </li>
                                    {/* Step 2 - list item 2  */}
                                    <li class=" hidden  h-[84%]  mt-1 mb-2 ">  {/* border-2 border-solid border-red-600/}
                                        {/* Header "Red" */}
                                        <div class="flex flex-col  h-[95%]   rounded-md  border-2 border-solid border-blue-600 "> {/* */}
                                            {/* Content Area */}
                                            <div class=" h-full p-4 bg-white  rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 ">  {/* border-2 border-solid border-green-600 */}

                                                {/* item data */}
                                                <ol class=" overflow-y-scroll  h-full relative border-s border-2 border-solid border-red-200   dark:border-gray-700">   {/* Last div -> in these Div all items list come */}
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
                                        </div>
                                    </li>


                                    {/* Step 2 - list item 1 
                                    <li class="h-3/6  ">  
                                        <div class=" h-[5%] border-2 border-solid border-blue-600 rounded-md" >  
                                            <span class="hover:text-red-600 text-green-400 m-2 text-lg font-semibold  dark:text-white">STEP 1 :</span > <span class="text-lg font-semibold  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Click on the Above <span class="text-blue-600 dark:text-blue-500"> STEP 1 </span>and Create Society </span>
                                        </div>

                                        <div class="  flex flex-col  h-[95%]   rounded-md  border-2 border-solid border-blue-600 "> 
                                            <div class=" h-full p-4 bg-white  rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 "> 
                                                <ol class=" overflow-y-scroll  h-full relative border-s border-2 border-solid border-red-200   dark:border-gray-700">   
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
                                        </div> 
                                    </li> */}
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Right Side : Form */}
                    <div class="flex flex-col h-full w-7/12 ">
                        {/* <!-- Progress-Bar component -->  */}
                        <div class=" h-3/6 w-full flex flex-row items-center ">

                            <div className="flex justify-between bg-blue-950">
                                {steps?.map((step, i) => (
                                    <div
                                        key={i}
                                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                                            } `}
                                    >
                                        <div className="step">
                                            {i + 1 < currentStep || complete ? <p>&#128640;</p> : i + 1}
                                        </div>
                                        <p className="text-gray-500">{step}</p>
                                    </div>
                                ))}
                            </div>
                            {!complete && (
                                <button
                                    className="btn"
                                    onClick={() => {
                                        currentStep === steps.length
                                            ? complete.value = true
                                            : currentStep.value = "prev";
                                    }}
                                >
                                    {currentStep === steps.length ? "Finish" : "Next"}
                                </button>
                            )}
                        </div>

                        {/* <!-- Children-Props component -->  */}
                        <div class="3/6 w-full flex flex-row items-center ">
                            {/* {props.children} */}
                        </div>
                    </div>

                </div>
            </div>
            {/* Footer */}
            <div class="w-full h-[5vh] flex flex-row justify-center items-center border-2 border-solid bg-white">
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://chintan.in/" class="hover:underline">Chaos chintan's product™</a>. All Rights Reserved.</span>
            </div>
        </>
    );
}
