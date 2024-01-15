import type { Signal } from "@preact/signals";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
// import { Button } from "../components/Button.tsx";
// import Dig from "../components/VideoEditTimestamp.tsx";

// import MainContent from "../components/newVideoEditContent.tsx";
// import TableRow from "../components/VideoEditPageTable.tsx";

import { PageProps } from "$fresh/server.ts";

interface CounterProps {
  count: Signal<number>;
  children: ComponentChildren;
  // renderListItem: Signal<number>;
  // defaultTabId: string;
  // activeTabId: string;
  // tabPanel: component;
}

export default function Tab(props: CounterProps) {
  const openTab = useSignal(0);
  const openClose = 0;
  return (
    <>
    
    <div class=" h-full flex flex-row">
      {/* side-bar-panel */}
      <aside
        id="sidebar-multi-level-sidebar"
        class="flex flex-row border-r-2 border-solid border-gray-200   max-w-fit transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="border-r-4 border-white h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
          <ul class="space-y-2 font-medium">

            <li>
              <a
                href="/societyHomePage/unit/showUnitDetails"
                class=" bg-blue-500 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <button
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group  "
                >
                <img src="unit.png" alt="" />
                </button>
              </a>
            </li>

            <li>
              <a
                href="/societyHomePage/member/showMemberDetails"
                class=" bg-blue-500 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <button
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                <img src="iregister.png" alt="" />
                </button>
              </a>
            </li>

            <li>
              <a
                href="/societyHomePage/billingHeads/billingHeads"
                class="  bg-blue-500  flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <button
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                <img src="BH heads.png" alt="" />  
                </button>
              </a>
            </li>

            <li>
              <a
                href="/societyHomePage/cycle"
                class="  bg-blue-500  flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <button
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                <img src="cycle.png" alt="" />  
                </button>
              </a>
            </li>

          </ul>
        </div>
       
       
        <div class="h-full">
          <div
            class={openTab.value === 1 ? "h-full flex flex-col  mx-4" : "hidden"}
            id="link1"
          >
            <div class="flex flex-row mt-2   h-3/4 w-full overflow-auto rounded-2xl">
              <div class="flex flex-col my-2 bg-[rgb(247,247,247)] h-auto w-full overflow-auto mx-2 border-2 border-solid border-blue-600 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                  <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                    Time Stamps
                  </mark>
                </h1>
                <div class="overflow-y-scroll overflow-x-hidden">
                  {/* <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig>
                  <Dig></Dig> */}
                </div>
              </div>
            </div>

            <div class="flex flex-row my-2  h-auto w-full overflow-auto  rounded-2xl ">
              <div class="flex flex-col my-2 bg-[rgb(247,247,247)] h-auto w-full overflow-auto  border-2 border-solid border-blue-600 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white content-center">
                  <mark class="px-2 text-white bg-blue-600 rounded-br-xl dark:bg-blue-500">
                    Add Time Stamp
                  </mark>
                </h1>

                <form class="px-3 w-full ">
                  <div class="md:col-span-2  flex justify-between  w-full items-center">
                    <label for="city" class="text-2xl">Enter Time Stamp</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      class="h-10 border mt-1 rounded px-4  bg-gray-50 w-2/4"
                      value=""
                      placeholder="00:00:00:00"
                    />
                  </div>

                  <div class="md:col-span-5 text-right py-2">
                    <div class="inline-flex items-end">
                      <a href="/site">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class={openTab.value === 2 ? "block" : "hidden"} id="link2">
            <div class="border-r-4 border-solid border-white h-full w-80 px-3 py-4 overflow-y-auto bg-red-500 dark:bg-gray-800 "></div>
          </div>

          <div
            class={
              openTab.value === 3
                ? "block max-h-full overflow-scroll border-2 border-gray-400 border-dashed rounded-lg mx3"
                : "hidden"
            }
            id="link3"
          >
            <div class="m-3 px-4  dark:border-gray-700 flex flex-col content-center h-full w-11/12 overflow-y-scroll">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr class="">
                    <th scope="col" class="px-6 py-3">
                      Parameter
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Value
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="">
                  {/* <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow>
                  <TableRow></TableRow> */}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </aside>


      {/* side-bar-Content */}
      <div class="h-full  w-full flex flex-col items-center">
        <div class="h-[4em] w-full flex flex-row  items-center justify-between bg[rgba(0, 0, 0, 0)] border-b-2 border-solid border-gray-200">
          {/* <form class="w-fit max-w-sm m-3 hover:shadow-xl focus:shadow-inner ">
            <div class="flex items-center">
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name" class="bg-gray-50 border border-solid border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-2 focus:border-solid focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
          </form> */}
        </div>

        <div class=" w-full h-full border-1 border-solid border-gray-100 mt-4 rounded-lg">
          {props.children}
        </div>
      </div>
      </div>
    </>
  );
}