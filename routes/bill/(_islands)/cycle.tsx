import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function Cycle(props: ChildrenProps) {

    return (
        <>
            {/* Cycle */}
            <div class=" max-h-full flex flex-col w-1/3 ">
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
                                    <span class="flex-1 ms-3 whitespace-nowrap text-2xl ">Create New Template</span>
                                </div>
                            </li>
                            <li class=" p-2">
                                <p class=" text-xs font-normal text-gray-500 dark:text-gray-400">All Fields are Maindatory*</p>
                            </li>
                        </ul>
                        {/* form -> isko "Over-flow karo" */}
                        {/* <TemplateForm></TemplateForm> */}
                        <div class=" h-5/6 my-2  ">
                            <div class=" h-full ">
                                <form class=" h-full space-y-4" method="post" action="">
                                    <div class=" h-fit overflow-y-scroll  grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div class="md:col-span-5">
                                            <label for="TemplateName">Template Name</label>
                                            <input
                                                type="text"
                                                name="TemplateName"
                                                id="TemplateName"
                                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="text"
                                                value={props.newTemplateData.value.template_name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div class="md:col-span-5" >
                                            <select
                                                name="TemplateType"
                                                id="TemplateType"
                                                value={props.newTemplateData.value.template_type}
                                                onChange={handleTemplateType}
                                                className="p-2 border rounded"
                                            >
                                                <option value={props.newTemplateData.value.template_type} disabled>Select Type</option>
                                                {templateTypeData.map((templateType) => (
                                                    <option key={templateType.name} value={templateType.name}>
                                                        {templateType.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Create */}
                                        <div class="md:col-span-5 space-x-2 flex">
                                            {/* ===================== cycleFrequency Dropdown */}
                                            <select
                                                name="cycle"
                                                id="cycle"
                                                value={props.newTemplateData.value.cycleFrequency}
                                                onChange={handleCycleFrequencyChange}
                                                className="p-2 border rounded w-full"
                                            >
                                                <option value="Select Cycle Frequency" disabled>Select Cycle</option>
                                                {props.selectCycleFrequency.value.map((item, index) => (
                                                    // Assuming `item.cycle_frequency` holds the cycle data
                                                    <option key={index} value={item.cycle_frequency}>{item.cycle_frequency}</option>
                                                ))}
                                            </select>

                                            {/* 
                                    <select
                                        name="cycleFrequency"
                                        id="cycleFrequency"
                                        value={props.newTemplateData.value.cycleFrequency}
                                        onChange={handleCycleFrequencyChange}
                                        className="p-2 border rounded"
                                    >
                                        <option value="" disabled>Select Cycle Frequency</option>
                                        {cycleFrequencyData.map((CycleFrequency) => (
                                            <option key={CycleFrequency.name} value={CycleFrequency.name}>
                                                {CycleFrequency.name}
                                            </option>
                                        ))}
                                    </select> */}

                                            {/*================== Cycle Dropdown */}
                                            <select
                                                name="cycle"
                                                id="cycle"
                                                value={props.newTemplateData.value.cycle}
                                                onChange={handleCycleChange}
                                                className="p-2 border rounded w-full"
                                            >
                                                <option value="Select Cycle" disabled>Select Cycle</option>
                                                {selectCycle.status.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.cycle}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div class="block md:col-span-5">
                                            <li className="space-y-1 my-1">
                                                <div className="flex items-center space-x-2">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current text-green-700 text-xl font-extrabold">
                                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                                        </svg> */}
                                                    <h4 className=" ml-1 font-medium">Bill Heads</h4>
                                                </div>
                                                <div class="items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                                    {/* <a href="/app/societyHomePage/billTemplate/showBillHeadsList"> */}
                                                    <button onClick={onBillHead} type="button" class=" space-x-1 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                        </svg>
                                                        <span>Select BH</span>
                                                    </button>
                                                    {/* </a> */}
                                                    {/* <a href="/app/societyHomePage/billTemplate/showBillHeadsList"> */}
                                                    {/* <button onClick={onViewBillHead} type="button" class=" space-x-1 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                </svg>
                                                <span>View BH</span>
                                            </button> */}
                                                    {/* </a> */}
                                                </div>
                                            </li>
                                            <li className="space-y-1 my-1">
                                                <div className="flex items-center space-x-2">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current text-green-700 text-xl font-extrabold">
                                                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                                                        </svg> */}
                                                    <h4 className=" ml-1 font-medium">Units</h4>
                                                </div>
                                                <div class="items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                                    {/* <a href="/app/societyHomePage/billTemplate/showBillHeadsList"> */}
                                                    <button onClick={onUnit} type="button" class=" space-x-1 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                        </svg>
                                                        <span>Select Units</span>
                                                    </button>
                                                    {/* </a> */}
                                                    {/* <a href="/app/societyHomePage/billTemplate/showBillHeadsList"> */}
                                                    {/* <button onClick={onViewUnit} type="button" class=" space-x-1 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                </svg>
                                                <span>View Units</span>
                                            </button> */}
                                                    {/* </a> */}

                                                </div>
                                            </li>
                                        </div>

                                        <div class="block w-full md:col-span-5 text-right" >
                                            <div class="inline-flex items-end">
                                                <button
                                                    onClick={onhandleSubmit}
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
        </>
    );
}