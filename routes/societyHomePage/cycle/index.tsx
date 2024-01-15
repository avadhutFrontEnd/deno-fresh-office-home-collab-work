import AppLayout from "../../../templates/layouts/AppLayout.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import TableRow from "../../../components/SiteShowdetails.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            <AppLayout>
                <div class="flex flex-row h-full w-full ">
                    {/* Billing Heads List */}
                    <div class="h-full w-full flex flex-row items-center">
                        <div class="h-full p-4 mt-3 ">
                            <div class=" h-full p-4 border-2 border-gray-400 border-dashed rounded-lg dark:border-gray-700 flex flex-col content-center min-w-[900px] overflow-y-scroll ">
                                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                                    <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                                        Billing Heads List :
                                    </mark>
                                </h1>
                                <div class="my-2 bg-[rgb(247,247,247)]  w-auto ">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Billing Head Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Rate
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Bases of Calculation
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <TableRow></TableRow>
                                            <TableRow></TableRow>
                                            <TableRow></TableRow>
                                            <TableRow></TableRow>
                                            <TableRow></TableRow>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add New Billing Heads */}
                    <div class="h-full w-full">
                        <div class="h-full w-full flex flex-row items-center">
                            <div
                                class="h-full w-full flex flex-col  mx-4"
                                id="dashboard"
                            >
                                <div class="flex flex-row mt-2 h-full w-full overflow-auto rounded-2xl">
                                    <div class="flex flex-col my-2 bg-[rgb(247,247,247)] h-auto w-full overflow-auto mx-2 border-2 border-solid border-blue-600 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                                            <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                                                Add New Billing Head :
                                            </mark>
                                        </h1>
                                        <div class="overflow-y-scroll overflow-x-hidden">






                                            <div class=" m-2 ">

                                                <div
                                                    class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                                                >
                                                    <div class="md:col-span-3">
                                                        <label for="full_name">Billing Head Name</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyName"
                                                            id="SocietyName"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Water Charges"
                                                        />
                                                    </div>

                                                    

                                                    <div class="md:col-span-2">
                                                        <label for="email">Rate</label>
                                                        <input
                                                            type="text"
                                                            name="Landmark"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder=" $ 500"
                                                        />
                                                    </div>

                                                    

                                                    <div class="md:col-span-2">
                                                        <label for="city">Bases of Calculation</label>
                                                        <input
                                                            type="text"
                                                            name="district"
                                                            id="district"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder=" "
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
                </div>
            </AppLayout>
        </>
    );
}