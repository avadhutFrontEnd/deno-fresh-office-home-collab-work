import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import Instruction from "../components/instruction.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: PageProps) {
    const count = useSignal(0);
    return (
        <>
            {/* <div class="flex flex-col h-[100vh] pt-4 bg-gray-100"> */}
            <div class="flex flex-col h-[95vh] pt-4 bg-gray-100">
                <div class="flex flex-row justify-evenly w-full px-4 mb-1 ">
                    <section class="border-b-4 border-white text-white sticky top-0 z-50 ">
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
                                            <img src="/settings.png" class=" mx-1 h-12"  />
                                                <span class=" text-4xl"> Initial Setup </span>
                                            {/* </span> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="flex flex-col w-full px-4 mb-1 ">
                    <ol class="items-center sm:flex">
                        <li class="relative mb-6 sm:mb-0 w-full">
                            <div class="flex items-center w-full ">
                                {/* Line */}
                                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
                                {/* Icon */}
                                <a href="/setUpPages/societyDetails">
                                    <button
                                        // onClick={() => {
                                        //     count.value = 1
                                        //     console.log(`onclick:`,count.value);
                                        //     console.log(`onclick:`);
                                        // }}

                                        class="z-10 flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full  border-2 border-solid border-white shrink-0  hover:bg-blue-700 font-bold p-2 focus:transition-all duration-10000 focus:ease-linear focus:bg-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  text-lg  text-blue-800 dark:text-white hover:text-white ">
                                        {/* <img src="/registerninesix.png" class="w-20" alt="" /> */}
                                        STEP 1
                                    </button>
                                </a>
                                {/* Line */}
                                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
                                {/* Icon */}
                                <a href="/setUpPages/signUp">
                                    <button class="z-10 flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full  border-2 border-solid border-white shrink-0  hover:bg-blue-700 font-bold p-2 focus:transition-all duration-10000 focus:ease-linear focus:bg-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  text-lg  text-blue-800 dark:text-white hover:text-white ">
                                        {/* <img src="/registerninesix.png" class="w-20" alt="" /> */}
                                        STEP 2
                                    </button>
                                </a>
                                {/* Line */}
                                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
                            </div>
                        </li>
                    </ol>
                </div>

                <div class="flex flex-row h-full w-full ">
                    {/* Instruction */}
                    <div class="h-full w-2/6 flex flex-row items-center ">
                        <div class="flex flex-row border-10 border-solid ">
                            <Instruction></Instruction>
                        </div>
                    </div>
                    {/* <!-- ChildrenProps component --> */}
                    <div class="h-full w-full flex flex-row items-center ">
                        {props.children}
                    </div>
                </div>

            </div>
            <div class="w-full h-[5vh] flex flex-row justify-center items-center border-2 border-solid bg-white">
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://chintan.in/" class="hover:underline">Chaos chintan's product™</a>. All Rights Reserved.</span>
            </div>

        </>
    );
}
