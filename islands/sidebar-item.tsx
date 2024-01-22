import { useState } from "preact/hooks";
import { PageProps } from "$fresh/server.ts";


export default function SidebarItem(props: PageProps) {
// export default function SidebarItem(props: TypeAheadInputProps){
    const [open, setOpen] = useState(false);
    const [unitList, setUnitList] = useState("");
    // const [unitList, setUnitList] = useState("");
    

    if (props.item.children) {
        // if (item.children) {
        return (
            <div class={open ? " p-4 text-lg block hover:bg-gray-600 transition-transform " : "p-2 text-lg block hover:bg-gray-600"}>
                <div class=" sidebar-title :  flex justify-between">
                    <span class="flex flex-row  items-center justify-between ">
                        {/* starting-icon : Building icon , wing icon ,floor icon "json" list se icon aaye-hei -> {/* 1. sidebar-title -> span   i -->  : inline block width 1.5 em      */}
                        {/* { item.icon && <i className={item.icon}></i> } */}
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                        </svg>
                        {/* */}
                        <span class=" text-3xl ">{props.item.title} </span>
                        {/* <span class=" text-3xl ">{item.title} </span>  */}
                    </span>
                    {/* <i class={open ? "Dropdown icon cursor-pointer transition-transform " : "cursor-pointer transition-transform rotate-180 "} onClick={() => setOpen(!open)}></i> 
                */}
                    <button class=" rounded-full" onClick={() => setOpen(!open)} >
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            {open ? <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" /> : <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8"> : <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                            </svg>}
                        </svg>
                    </button>
                </div>
                {/* ----------------------------------------------------- */}
                {/* 1. sidebar-content :       */}
                <div class={open ? "pt-4  h-auto  " : "h-0 overflow-hidden"}>
                    {props.item.children.map((child, index) => <SidebarItem key={index} item={child} sidebar={props.sidebar} value={props.value} onSidebarFunction={props.SidebarFunction}  />)}
                    {/* {item.children.map((child, index) => <SidebarItem key={index} item={child}  />)} */}
                    {/* {console.log(props)} */}
                    
                </div>
            </div>
        )
    } else {
        const handleButtonClick = () => {
            // Call the parent function and pass the inputValue
            // props.onSidebarFunction(props.item.units);
            // You can also reset the input value or perform any other actions as needed
            // setUnitList(item.unit);
            console.log(props);
            // setUnitList(props.item);
            // console.log(unitList);
            props.sidebar.value = props.item.units
            console.log(props.sidebar.value);
        };

        return (
            <a href={props.item.path || "#"} class="">
            {/* <a href={item.path || "#"} class=""> */}
                <button onClick={handleButtonClick} type="button" class="flex  text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm pr-2 py-2.5 text-center  items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                <img class=" mx-2" src="/assets/avatars/3staircase.png" alt="" srcset="" />
                    
                    {/* {console.log("Else:",props)} */}
                    {/* {console.log("else : -------------------------------",unitList)} */}
                    {/* {item.title}  */}
                </button>
            </a >
        )
    }
}