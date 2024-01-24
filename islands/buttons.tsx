import { useState } from "preact/hooks";
import { PageProps } from "$fresh/server.ts";
import { get_society } from "@app/client/v1.ts";

interface ModalProps {
    societyObject: object;
    societyObjectFunction: (pageNo: any[]) => void;
  }

export default function buttons({ societyObject, societyObjectFunction  }: ModalProps) {
    
    const onReview = () => {
        
        get_society().then(
            (data) => {
                societyObject.value.length = 0;
                const resp = data.json();
                resp.then((data) => {
                    data.status.forEach((item) => {
                        societyObject.value.push(item);
                    })
                });
                societyObjectFunction(societyObject.value)
            })
    };

    return (
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
            {/* Click To */}
            <li onClick={onReview} class=" ">
                <label href="#" class="  w-40  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-400 hover:bg-yellow-200 focus:ring-4 focus:ring-green-300 dark:focus:ring-blue-900">
                    <div class="pr-2 ">Review</div>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                    </svg>
                    <input type="button" class="hidden" />
                </label>
            </li>
        </ul>
    )
}
