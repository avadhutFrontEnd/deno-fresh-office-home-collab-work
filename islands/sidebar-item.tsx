import { useState } from "preact/hooks";
import { PageProps } from "$fresh/server.ts";


export default function SidebarItem(props: PageProps) {
    const [open, setOpen] = useState(false);
    const [unitList, setUnitList] = useState("");

    if (props.item.children) {
        return (
            <div class={open ? "  pl-6 pr-2 py-3 transition-transform rounded-md  flex flex-col space-y-2 bg-gray-50 " : " pl-6 pr-2 py-3  block border-l-2 border-solid border-blue-400"}>
                <div class="flex justify-between">
                    <span class={open ? "flex flex-row space-x-4 items-center justify-between   pl-2" : "flex flex-row space-x-4 items-center justify-between  pl-2"  }>
                        <button class=" " onClick={() => setOpen(!open)} >
                            <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                {open ? <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" /> : <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8"> : <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                                </svg>}
                            </svg>
                        </button>
                        <span class=" text-3xl ">{props.item.title} </span>
                    </span>
                </div>
               
                <div class={open ? "pt-4  h-auto  " : "h-0 overflow-hidden"}>
                    {props.item.children.map((child, index) => <SidebarItem key={index} item={child} sidebar={props.sidebar}  />)}
                </div>
            </div>
        )
    } else {
        const handleButtonClick = () => {
            props.sidebar.value = props.item.units 
        };

        return (
            
                <button onClick={handleButtonClick} type="button" class="flex  text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm pr-2 py-2.5 text-center  items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                    <img class=" mx-2" src="/assets/avatars/3staircase.png" alt="" srcset="" />
                    {props.item.title} 
                </button>
            
        )
    }
}