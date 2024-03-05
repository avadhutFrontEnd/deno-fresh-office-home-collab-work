import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>

            <div class="h-fit bg-gray-900 border-b-2 border-solid border-gray-900 p-4 flex flex-col">
                <div class="h-1/3 w-full flex flex-row justify-between">
                    <div class="">
                        <h1 class="inline text-4xl font-bold font-serif text-center text-blue-800">Member List</h1>
                        <span class="w-5 h-5 bg-gray-300 text-white text-center p-1 rounded-md mb-2">89</span>
                    </div>
                    <div class="flex flex-col justify-between items-center space-y-3">
                        <button icon="fa-solid fa-cart-shopping" type="button" class="bg-rose-600 text-white bg-blue focus:ring-4 focus:outline-none  font-medium rounded-2xl text-sm px-4 py-2.5  text-center inline-flex items-center  me-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus-lg w-4 me-1" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                            New Member
                        </button>
                    </div>
                </div>
                <div class="h-2/3 w-full">
                    <div class="relative flex w-full flex-wrap items-center justify-between bg-gray-900 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700">
                        <div class="flex w-[30%]  items-center justify-between relative">
                            <input
                                type="search"
                                class="relative block max-w-48 flex-auto rounded-xl border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] pl-4 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2" />
                            <span class="absolute left-40 top-1/2 transform -translate-y-1/2" id="basic-addon2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="h-5 w-5 ">
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>

                        <div class="flex items-center ">

                        </div>
                        <button type="button" class="text-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm pl-4 px-5 py-2.5 text-center inline-flex items-center ml-auto">
                            <svg class="w-3 h-4 me-1 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                            </svg>
                            Sort
                        </button>
                        <button type="button" class="text-white border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2.5 text-center inline-flex items-center ml-2">
                            <svg class="w-3 h-4 me-1 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                            </svg>
                            Filter
                        </button>
                        <div class="flex items-center pl-3">
                            <button type="submit" class="mt-1 px-3 py-2 w-full  rounded-2xl focus:outline-violet-500 border border-rose-600 text-sm leading-6 text-rose-600 bg-slate-950 cursor-pointer flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-upload" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <path d="M12 11v6" />
                                    <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                                </svg>
                                File Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}