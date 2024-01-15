import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            <div class="flex flex-row h-full w-full ">
                {/* Add New Member */}
                <div class="h-full w-3/6">
                    <div class="h-full w-full flex flex-row items-center">
                        <div
                            class="h-full w-full flex flex-col  mx-4"
                            id="dashboard"
                        >
                            <div class="flex flex-row mt-2 h-full w-full overflow-auto rounded-2xl">
                                <div class="flex flex-col my-2 bg-[rgb(247,247,247)] h-auto w-full overflow-auto mx-2 border-2 border-solid border-blue-600 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                                        <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                                            Add New Member :
                                        </mark>
                                    </h1>
                                    <div class="overflow-y-scroll overflow-x-hidden">






                                        <div class=" m-2 ">

                                            <div
                                                class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                                            >
                                                <div class="md:col-span-3">
                                                    <label for="full_name"> Member Name</label>
                                                    <input
                                                        type="text"
                                                        name="MemberName"
                                                        id="MemberName"
                                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                        value=""
                                                        placeholder=" Member Name"
                                                    />
                                                </div>



                                                <div class="md:col-span-2">
                                                    <label for="email">Email Id</label>
                                                    <input
                                                        type="text"
                                                        name="Landmark"
                                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                        value=""
                                                        placeholder="@emailid"
                                                    />
                                                </div>

                                                <div class="md:col-span-2">
                                                    <label for="city">Date of Admission</label>
                                                    <input
                                                        type="text"
                                                        name="district"
                                                        id="district"
                                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                        value=""
                                                        placeholder="31-10-1995"
                                                    />
                                                </div>

                                                <div class="md:col-span-2">
                                                    <label for="city">Date of Admission</label>
                                                    <input
                                                        type="text"
                                                        name="district"
                                                        id="district"
                                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                        value=""
                                                        placeholder="31-10-1995"
                                                    />
                                                </div>



                                                <div class="md:col-span-5 text-right">
                                                    <div class="inline-flex items-end">
                                                        <a href="/setUpPages/userlogin">
                                                            <button
                                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                            >
                                                                Add Billing Head
                                                            </button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Memeber Master List Table */}
                <div class="h-full w-3/6 flex flex-row items-center">
                    <div class="h-full p-4 mt-3  overflow-x-scroll ">
                        <div class=" h-full p-4 border-2 border-gray-400 border-dashed rounded-lg dark:border-gray-700 flex flex-col content-center min-w-[900px] overflow-y-scroll ">
                            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                                <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                                    Members Master List :
                                </mark>
                            </h1>

                            <div class="my-2 bg-[rgb(247,247,247)]  w-auto ">
                                <div class=" h-full w-full overflow-x-auto">
                                    <table class="items-center w-full bg-transparent border-collapse mx-auto  ">
                                        <thead>
                                            <tr>
                                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                    Member Name
                                                </th>
                                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                    Email Id
                                                </th>
                                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                    Date of Admission
                                                </th>
                                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                    Date of Cessation
                                                </th>
                                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                    Reason
                                                </th>
                                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                    Membership Status
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/* Row 1  */}
                                            <tr>
                                                {/* <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                            <img src="/radar.png" alt="..." class="w-[40px]" />
                                                            <span class="ml-3 font-bold text-xl text-gray-500 truncate dark:text-gray-400 "> A1 north west </span></th> */}
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div class="flex items-center">
                                                        <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 ">
                                                            Mrs. Shilpa Shukla
                                                        </span>
                                                    </div>
                                                </td>

                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div class="flex items-center">
                                                        <div class="relative">
                                                            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                                </svg>
                                                            </div>
                                                            <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="email@example" required />
                                                        </div>
                                                    </div>
                                                </td>

                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div date-rangepicker class="flex items-center">
                                                        <div class="relative">
                                                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                                </svg>
                                                            </div>
                                                            <input name="Date of Admission" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select a Date of Admission" />
                                                        </div>
                                                    </div>
                                                </td>

                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div date-rangepicker class="flex items-center">
                                                        <div class="relative">
                                                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                                </svg>
                                                            </div>
                                                            <input name="Date of Cessation" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select a Date of Cessation" />
                                                        </div>
                                                    </div>
                                                </td>



                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div class="flex items-center text-xl text-gray-500 truncate dark:text-gray-400">
                                                        <div class="flex flex-row h-[56px]  justify-between  w-full p-2 mb-6 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            <div class="flex items-center">
                                                                <svg
                                                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 18 18"
                                                                >
                                                                    <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                                                                    <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                                                                </svg>
                                                            </div>
                                                            <select
                                                                id="small"
                                                                class="bg-none px-2 rounded-lg"
                                                            >
                                                                <option disabled selected hidden>
                                                                    Own
                                                                </option>
                                                                <option value="A++">Sale</option>
                                                                <option value="A">Transfer</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>


                                                {/* onClick Event */}
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                    <div>
                                                        <div class="flex flex-row h-[56px]  justify-between  w-full p-2 mb-6 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            <div class="flex items-center">
                                                                <svg
                                                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 18 18"
                                                                >
                                                                    <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                                                                    <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                                                                </svg>
                                                            </div>
                                                            <select
                                                                id="small"
                                                                class="bg-none px-2 rounded-lg"
                                                            >
                                                                <option disabled selected hidden>
                                                                    Dis-abled
                                                                </option>
                                                                <option value="A++">Active</option>
                                                                <option value="A">Inactive</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}