import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
   children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
   const count = useSignal(0);
   return (
      <>
         <div class="-m-1.5 overflow-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
               <div class="overflow-hidden">
                  <div class="table  table-auto w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-2 border border-slate-400">
                     <div class="table-header-group">
                        <div class="table-row">
                           <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Course Name</div>
                           <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category</div>
                           <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">First Name</div>
                           <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Last Name Mail</div>
                           <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Mail</div>
                           <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Contact</div>
                           <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"></div>
                           <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"></div>
                           <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"></div>
                        </div>
                     </div>

                     
                     <div class="table-row-group divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-slate-800">
                        {/* Row 1 */}
                        <div class="table-row border-2 border-solid border-red-500"> {/* <tr> */}
                           {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              <div class="flex items-center gap-3">
                                 <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/angularjs_original_logo_icon_146649.png" alt="abc" class="relative inline-block h-3 w- rounded-full object-cover object-center" />
                                 <div class="flex flex-col">
                                    <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Status</p>
                                 </div>
                              </div>
                           </div>
                           {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              <div class="flex items-center gap-3">
                                 <svg class="w-3 h-3  text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                 </svg>
                                 <div class="flex flex-col">
                                    <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Akaay Kohli</p>
                                 </div>
                              </div>

                           </div>
                           {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              <div class="flex flex-col">
                                 <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">First Name</p>
                              </div>
                           </div>
                           {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                           <div class="flex flex-col">
                                    <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">Last Name</p>
                                 </div>
                              </div>
                              {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                 <div class="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-blue-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-6l-2 3H8l-2-3H2"></path>
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.58 21H2.42C1.57 21 1 20.33 1 19.5v-15C1 3.67 1.57 3 2.42 3h19.16C22.43 3 23 3.67 23 4.5v15c0 .83-.57 1.5-1.42 1.5zM2.42 5A.42.42 0 002 5.42v14.16c0 .23.19.42.42.42h19.16a.42.42 0 00.42-.42V5.42A.42.42 0 0021.58 5H2.42z"></path>
                                    </svg>
                                    <div class="flex flex-col">
                                       <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Email</p>
                                    </div>
                                 </div>
                              </div>
                              {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                 <div class="flex items-center gap-3">
                                    <svg class="w-2 h-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                       <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                    <div class="flex flex-col">
                                       <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Phone No</p>
                                    </div>
                                 </div>
                              </div>
                              {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                 <div class="flex items-center justify-center ">
                                    <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3  text-center inline-flex items-center py-1.5 dark:focus:ring-[#1da1f2]/55">
                                       Edit
                                    </button>
                                 </div>
                              </div>
                              {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                 <div class="flex items-center justify-center ">
                                    <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 ">
                                       View
                                    </button>
                                 </div>
                              </div>
                              {/* <td> */}    <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                 <button class="text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative h-6 max-h-[20px] w-6 max-w-[20px] select-none rounded-lg text-center align-middle font-sans text-xxs font-medium uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                    <span class="absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 transform">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-3">
                                          <path d="M12 5a2 2 0 11-2 2 2 2 0 012-2zm0 7a2 2 0 11-2 2 2 2 0 012-2zm0 7a2 2 0 11-2 2 2 2 0 012-2z" />
                                       </svg>
                                    </span>
                                 </button>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}