import { useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import Cycle from "./cycle.tsx";
import GridComponent from "./grid-component.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function GenerateBill(props: ChildrenProps) {
    const [selectedCycle, setSelectedCycle] = useState({
        semi_Annualy: {
            outerLoop: [1, 2],
            innerLoop: [1, 2, 3, 4, 5, 6]
        }
    });

    const handleCycleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        if (value == "Monthly") {
            setSelectedCycle({
                Monthly: {
                    outerLoop: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    innerLoop: [1]
                }
            })
        } else if (value == "Quaterly") {
            setSelectedCycle({
                Quaterly: {
                    outerLoop: [1, 2, 3, 4],
                    innerLoop: [1, 2, 3]
                }
            })
        } else if (value == "semi_Annualy") {
            setSelectedCycle({
                semi_Annualy: {
                    outerLoop: [1, 2],
                    innerLoop: [1, 2, 3, 4, 5, 6]
                }
            })
        } else if (value == "Annualy") {
            setSelectedCycle({
                Annualy: {
                    outerLoop: [1],
                    innerLoop: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                }
            })
        }
    };

    return (
        <>
            <div class="flex flex-row h-full w-full ">
                <div class="h-full w-full flex flex-row items-center">
                    <div class="h-full w-full p-4 mt-3 ">
                        <div class=" h-full w-full p-4 dark:border-gray-700 flex flex-col content-center overflow-y-scroll ">

                            {/* Cycle */}
                            <div class=" h-full flex flex-col w-1/3 ">
                                <section class="h-full w-full ">
                                    <div class="flex flex-col h-full w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                                        <ul class="h-fit my-2">
                                            <li>
                                                <div class="flex items-baseline  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                    <svg class="w-6 h-6 mx-2 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                                                        <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                                                    </svg>
                                                    <span class="flex-1 ms-3 whitespace-nowrap text-2xl ">Create New Cycle</span>
                                                </div>
                                            </li>
                                            <li class=" p-2">
                                                <p class=" text-xs font-normal text-gray-500 dark:text-gray-400"></p>
                                            </li>
                                        </ul>

                                        {/* Calender */}
                                        <GridComponent></GridComponent>
                                    </div>
                                </section>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}