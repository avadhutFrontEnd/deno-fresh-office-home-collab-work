import Navbar from "../../components/AppLayoutComponents/Navbar.tsx";
import Sidebar from "../../islands/AppLayoutIslands/sider-bar.tsx";
import SetUp from "./index.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
  children: ComponentChildren;
}

export default function newVideoEdit(props: PageProps) {
  const count = useSignal(0);
  return (
    <>
      <SetUp>
        <div class="flex flex-col h-full w-full px-4 mb-1">
          <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0 w-full">
              <div class="flex items-center w-full">
                {/* Line */}
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                {/* Icon */}
                <a href="/societyHomePage/unit">
                  <div class="z-10 flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    {/* <img src="/Unitninesix.png" alt="" /> */}
                    <h3 class="text-lg font-semibold text-blue-800 dark:text-white">STEP 1</h3>
                  </div>
                </a>

                {/* Line */}
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                {/* Icon */}
                <a href="/societyHomePage/member">
                  <div class="z-10 flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    {/* <img src="/registerninesix.png" class="w-20" alt="" /> */}
                    <h3 class="text-lg font-semibold text-blue-800 dark:text-white">STEP 2</h3>
                  </div>
                </a>
                {/* Line */}
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                {/* Icon */}
                <a href="/societyHomePage/billingHeads">
                <div class="z-10 flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  {/* <img src="/billingheads.png" class="w-20" alt="" /> */}
                  <h3 class="text-lg font-semibold text-blue-800 dark:text-white">STEP 3</h3>
                </div>
                </a>
                {/* Line */}
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>



              {/* Text */}
              {/* <div class="flex items-center w-full mt-5 mb-4">
                {
                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
                <div class="z-10 flex items-center justify-center w-24 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <h3 class="text-lg font-semibold text-blue-800 dark:text-white">STEP 1</h3>
                </div>
                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>

                <div class="z-10 flex items-center justify-center w-24 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <h3 class="text-lg font-semibold text-blue-800 dark:text-white">STEP 2</h3>
                </div>
                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>
                <div class="z-10 flex items-center justify-center w-24 h-8 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <h3 class="text-lg font-semibold text-blue-800 dark:text-white">STEP 3</h3>
                </div>
                <div class="hidden sm:flex w-full bg-white h-0.5 dark:bg-gray-700"></div>

              </div> */}
            </li>
          </ol>
          <div class="h-full w-full ">
            {props.children}
          </div>
          
        </div>
      </SetUp>
    </>
  );
}
