import { useSignal } from "@preact/signals";

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
                <div class="flex flex-row h-full w-full ">

                    {/* Add New Unit */}
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
                                                Add New Unit :
                                            </mark>
                                        </h1>
                                        <div class="overflow-y-scroll overflow-x-hidden">
                                            <div class=" m-2 ">
                                                <div
                                                    class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                                                >
                                                    <div class="md:col-span-1">
                                                        <label for="full_name">Unit Number</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyName"
                                                            id="SocietyName"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="404"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="email">Wing</label>
                                                        <input
                                                            type="text"
                                                            name="Landmark"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="B"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="full_name">Floor</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyName"
                                                            id="SocietyName"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="5th"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="email">Category</label>
                                                        {/* <input
                                                            type="text"
                                                            name="Landmark"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="2BHK"
                                                        /> */}
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
                                                                        2BHK
                                                                    </option>
                                                                    <option value="A++">1RK</option>
                                                                    <option value="A">2BHK</option>
                                                                    <option value="B">1BHK </option>
                                                                    <option value="C">Store</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="city">Area in sq ft</label>
                                                        <input
                                                            type="text"
                                                            name="district"
                                                            id="district"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="550 sq ft"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="email">Owned parking</label>
                                                        {/* <input
                                                            type="text"
                                                            name="Landmark"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="2BHK"
                                                        /> */}
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
                                                                        2BHK
                                                                    </option>
                                                                    <option value="A++">1</option>
                                                                    <option value="A++">2</option>
                                                                    <option value="A">3</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="email">2 wheelers (open)</label>
                                                        {/* <input
                                                            type="text"
                                                            name="Landmark"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="2BHK"
                                                        /> */}
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
                                                                        2BHK
                                                                    </option>
                                                                    <option value="A++">1</option>
                                                                    <option value="A++">2</option>
                                                                    <option value="A">3</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="email">4 wheelers (open)</label>
                                                        {/* <input
                                                            type="text"
                                                            name="Landmark"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="2BHK"
                                                        /> */}
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
                                                                        2BHK
                                                                    </option>
                                                                    <option value="A++">1</option>
                                                                    <option value="A++">2</option>
                                                                    <option value="A">3</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="md:col-span-1">
                                                        <label for="full_name">Occupying Member Name</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyName"
                                                            id="SocietyName"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Member List"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-5 text-right">
                                                        <div class="inline-flex items-end">
                                                            <a href="/setUpPages/userlogin">
                                                                <button
                                                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                                >
                                                                    Add Unit
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

                    {/* Unit Master List Table */}
                    <div class="h-full w-3/6 flex flex-row items-center ">
                        <div class="h-full p-4 mt-3 overflow-x-scroll ">
                            <div class=" h-full p-4 border-2 border-gray-400 border-dashed rounded-lg dark:border-gray-700 flex flex-col content-center min-w-[900px] overflow-y-scroll ">
                                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                                    <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                                        Units Master List :
                                    </mark>
                                </h1>

                                <div class="my-2 bg-[rgb(247,247,247)]  w-auto ">
                                    <div class=" h-full w-full overflow-x-auto">
                                        <table class="items-center w-full bg-transparent border-collapse mx-auto  ">
                                            <thead>
                                                <tr>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Unit Number
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Wing
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Floor
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Category
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Area in sq ft
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Owned parking
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        2 wheelers (open)
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        4 wheelers (open)
                                                    </th>
                                                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blue-300 text-blue-800 border-blue-700">
                                                        Occupying Member Name
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
                                                                404
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex items-center">
                                                            <span class="bg-[#FC766AFF] text-[#ffffff] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 ">
                                                                B
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex items-center">
                                                            <span class=" text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 ">
                                                                5th
                                                            </span>
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
                                                                        2BHK
                                                                    </option>
                                                                    <option value="A++">1RK</option>
                                                                    <option value="A">2BHK</option>
                                                                    <option value="B">1BHK </option>
                                                                    <option value="C">Store</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex text-xl text-gray-500 truncate dark:text-gray-400">
                                                            550 sq ft
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
                                                                        4
                                                                    </option>
                                                                    <option value="A++">1</option>
                                                                    <option value="A">2</option>
                                                                    <option value="B">3 </option>
                                                                    <option value="None">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>

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
                                                                        4
                                                                    </option>
                                                                    <option value="A++">1</option>
                                                                    <option value="A">2</option>
                                                                    <option value="B">3 </option>
                                                                    <option value="None">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>

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
                                                                        4
                                                                    </option>
                                                                    <option value="A++">1</option>
                                                                    <option value="A">2</option>
                                                                    <option value="B">3 </option>
                                                                    <option value="None">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <div class="flex items-center">
                                                            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 ">
                                                                Mrs. Shilpa Shukla
                                                            </span>
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



