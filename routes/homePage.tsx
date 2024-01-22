import React from "preact/compat";
import { signal } from "@preact/signals";
import { Handlers } from "$fresh/server.ts";
import Sidebar from "../islands/sidebar.tsx";
import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

// ----------------------------------------------------------------

export default function userLogin() {
    const errorMsg = signal(false);
    return (
        <>
            {
                <Head>
                    <link rel='stylesheet' href={asset("../../static/css/sidebar.css")} />
                </Head>
            }
            <div class="flex flex-col h-screen ">
                {/* bg */}
                <div class="h-[95vh] bg-gray-500 flex flex-col border-10 border-solid bg-cover bg-local bg-center bg-no-repeat bg-[url('https://teja12.kuikr.com/is/a/c/570x430/gallery_images/original/cf5d1987f603b98.gif')] bg-blend-multiply ">
                    {/* Haeder */}
                    <div class=" h-[10%] flex flex-row justify-between items-center">
                        <div class="">
                            <h1 class="mx-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-auto mb-auto">
                                <div class="flex flex-row justify-center"> <img src="/assets/avatars/communities.png" class="mx-2" /> <span class="text-6xl items-center text-white">Chaos</span></div>
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
                                        <img src="/assets/avatars/settings.png" class=" mx-1 h-12" />
                                        <span class="  text-white text-4xl"> Initial Setup </span>
                                        {/* </span> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                    <div class="  h-[90%]  flex flex-row w-full ">
                        <div class=" max-h-full flex flex-col w-1/3 border-2 border-solid border-red-400 p-4">
                            <section class=" h-full w-full "> {/* overflow-scroll */}
                                <div class="flex flex-col h-full w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                                    {/* Heading */}
                                    <ul class="h-1/6 my-2">
                                        <li>
                                            <div class="flex items-baseline  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                <svg class="w-6 h-6 mx-2 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                                                </svg>
                                                <span class="flex-1 ms-3 whitespace-nowrap text-2xl ">MetaMask</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p class=" text-xs font-normal text-gray-500 dark:text-gray-400">Please Fill All Society Details. All Fields are Maindatory and Click "Submit" Button</p>
                                        </li>
                                    </ul>

                                    {/* form -> isko "Over-flow karo" */}
                                    <div class=" h-5/6 my-2  ">
                                        <div class=" h-full ">
                                            <form class=" h-full space-y-4" method="post" action="">
                                                <div class=" h-full overflow-y-scroll  grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                    <div class="md:col-span-5">
                                                        <label for="SocietyName">Society Name</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyName"
                                                            id="SocietyName"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="text"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-5">
                                                        <label for="AddressLine1">Address Line 1</label>
                                                        <input
                                                            type="text"
                                                            name="AddressLine1"
                                                            id="AddressLine1"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="text"
                                                        />
                                                    </div>
                                                    <div class="md:col-span-5">
                                                        <label for="AddressLine2">Address Line 2</label>
                                                        <input
                                                            type="text"
                                                            name="AddressLine2"
                                                            id="AddressLine2"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="text"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="city">City</label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="near jeevan vikas hospital"
                                                        />
                                                    </div>
                                                    <div class="md:col-span-2">
                                                        <label for="district">District</label>
                                                        <input
                                                            type="text"
                                                            name="district"
                                                            id="district"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Mumbai Suburban"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="state">State</label>
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            id="state"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Maharashtra"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="country">Country</label>
                                                        <div
                                                            class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                                                        >
                                                            <input
                                                                name="country"
                                                                id="country"
                                                                placeholder="India"
                                                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                                value=""
                                                            />
                                                            <button
                                                                tabindex="-1"
                                                                class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                                            >
                                                                <svg
                                                                    class="w-4 h-4 mx-2 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </button>
                                                            <button
                                                                tabindex="-1"
                                                                for="show_more"
                                                                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                                            >
                                                                <svg
                                                                    class="w-4 h-4 mx-2 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    <polyline
                                                                        points="18 15 12 9 6 15"
                                                                    ></polyline>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div class="md:col-span-4">
                                                        <label for="SocietyRegistrationNumber">Society Registration Number</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyRegistrationNumber"
                                                            id="SocietyRegistrationNumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="xxxx123xxx345"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-4">
                                                        <label for="SocietyRegistrationDate">Society Registration Date</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyRegistrationDate"
                                                            id="SocietyRegistrationDate"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="ABCTY1234D."
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="pannumber">PAN Number</label>
                                                        <input
                                                            type="text"
                                                            name="pannumber"
                                                            id="pannumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="ABCTY1234D."
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="tannumber">TAN Number</label>
                                                        <input
                                                            type="text"
                                                            name="tannumber"
                                                            id="tannumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="PDES03028F"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="gstnumber">GST Number</label>
                                                        <input
                                                            type="text"
                                                            name="gstnumber"
                                                            id="gstnumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Enter GST/UIN of the Taxpayer"
                                                        />
                                                    </div>
                                                    <div class="md:col-span-5 text-right">
                                                        <div class="inline-flex items-end">
                                                            <button
                                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/*  Part 2 :*/}
                        <section class=" h-full w-2/3  border-2 border-solid border-yellow-400 ">
                            {/* File Upload box */}
                            <div class=" h-1/3 w-full px-4 pt-4 border-2 border-solid border-indigo-400 ">
                                <div class=" h-full w-full p-4 bg-gray-100 opacity-80 rounded-md hover:shadow-lg">
                                    {/* Heading */}
                                    <ul class="h-1/6 my-2">
                                        <li>
                                            <div class="flex items-baseline  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                <svg class="w-6 h-6 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                    <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                                                </svg>
                                                <span class="flex-1 ms-3 whitespace-nowrap text-2xl ">MetaMask</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p class=" text-xs font-normal text-gray-500 dark:text-gray-400">Please Fill All Society Details. All Fields are Maindatory and Click "Submit" Button</p>
                                        </li>
                                        <ul class="  flex justify-between items-baseline space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                                            <li>
                                                <a href="#" class=" w-40 inline-flex justify-center items-center  px-5 text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-900">
                                                    <input type="button" class="hidden  " />
                                                    <label href="#" class="  w-40  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-900">
                                                        <div class="pr-2 ">Download</div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            class="mr-1 h-6 w-6">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </label>
                                                </a>
                                            </li>
                                            <li class=" ">
                                                <input type="file" class="hidden " />
                                                <label href="#" class="  w-40  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-blue-900">
                                                    <div class="pr-2 ">Upload</div>
                                                    <svg
                                                        class="w-6 h-6 "
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                    </svg>

                                                </label>
                                            </li>
                                            <li>
                                                <label href="#" class="  w-40  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-200 focus:ring-4 focus:ring-green-300 dark:focus:ring-blue-900">
                                                    <div class="pr-2 ">Review</div>
                                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                                                    </svg>
                                                    <input type="button" class="hidden" />
                                                </label>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>

                                {/* */}
                            </div>



                            {/*  Part 3 :    */}
                            {/*----------------- Class = main */}
                            <section class="flex flex-row h-2/3 w-full p-4 border-2 border-green-500 border-solid ">
                                <div class=" h-full w-full p-4 bg-gray-100 opacity-80 rounded-md hover:shadow-lg">
                                    <Sidebar />
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
                <div class="w-full h-[5vh] flex flex-row justify-center items-center border-2 border-solid">
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a href="http://chintan.in/" class="hover:underline">
                            SCAI™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </>
    );
}


