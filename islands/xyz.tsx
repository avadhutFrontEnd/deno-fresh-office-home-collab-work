import { ComponentChildren } from "preact";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit({ children }) {
    return (
        <>
            <aside class=" h-screen ">
                <nav class=" h-full flex flex-col bg-white border-r shadow-sm">
                    <div class=" p-4 flex  flex-row justify-between items-center">
                        <img src="logo.svg" alt="L" class=" w-32" />
                        <button class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </div>
                    <ul class=" flex-1 px-3 ">{children}</ul>
                    <div class=" border-t flex p-3 ">
                        <img src="" alt="" class=" w-10 h-10 rounded-md" />
                        <div class=" flex justify-between items-center w-52 ml-3">
                            <div class="leading-4">
                                <h4 class=" font-semibold">Avadhut jagde</h4>
                                <span class=" text-xs text-gray-600">asdfgh@34gmail.com</span>
                            </div>
                            <button class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
}

export function SidebarItem({icon , text , active , alert}){

    return(
        <li class={
            `relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${ active ? " bg-gradient-to-tr from-indigo-200 to-indigo-800" : " hover:bg-indigo-50 text-gray-600"} `}>
           {icon} 
           <span class=" w-52 ml-3">{text}</span>
           {alert && (
           <div class={`absolute right-2 w-2 h-2 rounded bg-indigo-400 `}></div>
           )}
        </li>   
    )
}