import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
   children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
   const count = useSignal(0);
   return (
      <>
         <div className="relative overflow-x-auto shadow-md  w-full h-full">
            <table className="w-full h-fit text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 px-3 ">
               <thead class=" w-full h-10" >
                  <tr class="">
                     <th scope="col" className="px-6 py-3 ">
                        Course Name
                     </th>
                     <th scope="col" className="px-6 py-3 ">
                        Category
                     </th>
                     <th scope="col" className="px-6 py-3">
                        First Name
                     </th>
                     <th scope="col" className="px-6 py-3 ">
                        Last Name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Mail
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Contact
                     </th>
                     <th scope="col" className="px-6 py-3"></th>
                     <th scope="col" className="px-6 py-3"></th>
                     <th scope="col" className="px-6 py-3"></th>
                  </tr>
               </thead>
               <tbody class=" h-full w-full py-3 ">
                  <tr class="w-full h-10 items-center rounded-md -indent-2 table-auto text-center  bg-slate-200 p-3">
                     {/* <div class=" "> */}
                     <td class=" border-l-8 border-solid border-green-400  p-2 pr-4 ml-3 mb-2 ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="LimeGreen" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12l0 .01" /><path d="M14.828 9.172a4 4 0 0 1 0 5.656" /><path d="M17.657 6.343a8 8 0 0 1 0 11.314" /><path d="M9.168 14.828a4 4 0 0 1 0 -5.656" /><path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /></svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Status</p>
                           </div>
                        </div>
                     </td>

                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-hexagon" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                              <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                              <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                           </svg>
                           <div class="flex flex-col">
                              <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Akaay Kohli</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">First Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">Last Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-blue-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-6l-2 3H8l-2-3H2"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.58 21H2.42C1.57 21 1 20.33 1 19.5v-15C1 3.67 1.57 3 2.42 3h19.16C22.43 3 23 3.67 23 4.5v15c0 .83-.57 1.5-1.42 1.5zM2.42 5A.42.42 0 002 5.42v14.16c0 .23.19.42.42.42h19.16a.42.42 0 00.42-.42V5.42A.42.42 0 0021.58 5H2.42z"></path>
                           </svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Email</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center gap-3">
                           <svg class="w-2 h-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                           </svg>
                           <div class="flex flex-col">
                              <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Phone No</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3  text-center inline-flex items-center py-1.5 dark:focus:ring-[#1da1f2]/55">
                              Edit
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4 pl-4">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 ">
                              View
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <button class="text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative h-6 max-h-[20px] w-6 max-w-[20px] select-none rounded-lg text-center align-middle font-sans text-xxs font-medium uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                           <span class="absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 transform">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-3">
                                 <path d="M12 5a2 2 0 11-2 2 2 2 0 012-2zm0 7a2 2 0 11-2 2 2 2 0 012-2zm0 7a2 2 0 11-2 2 2 2 0 012-2z" />
                              </svg>
                           </span>
                        </button>
                     </td>
                     {/* </div> */}

                  </tr>
                  <tr class="w-full h-10 items-center rounded-md -indent-2 table-auto text-center  bg-slate-200 p-3">
                     {/* <div class=" "> */}
                     <td class=" border-l-8 border-solid border-red-400  p-2 pr-4 ml-3 mb-2 ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point-off" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3l18 18" /><path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" /><path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" /><path d="M9.168 14.828a4 4 0 0 1 0 -5.656" /><path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /></svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Status</p>
                           </div>
                        </div>
                     </td>

                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-hexagon" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                              <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                              <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                           </svg>
                           <div class="flex flex-col">
                              <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Akaay Kohli</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">First Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">Last Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2 text-blue-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-6l-2 3H8l-2-3H2"></path>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.58 21H2.42C1.57 21 1 20.33 1 19.5v-15C1 3.67 1.57 3 2.42 3h19.16C22.43 3 23 3.67 23 4.5v15c0 .83-.57 1.5-1.42 1.5zM2.42 5A.42.42 0 002 5.42v14.16c0 .23.19.42.42.42h19.16a.42.42 0 00.42-.42V5.42A.42.42 0 0021.58 5H2.42z"></path>
                           </svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Email</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center gap-3">
                           <svg class="w-2 h-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                           </svg>
                           <div class="flex flex-col">
                              <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Phone No</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3  text-center inline-flex items-center py-1.5 dark:focus:ring-[#1da1f2]/55">
                              Edit
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4 pl-4">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 ">
                              View
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4">
                        <button class="text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative h-6 max-h-[20px] w-6 max-w-[20px] select-none rounded-lg text-center align-middle font-sans text-xxs font-medium uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                           <span class="absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 transform">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-3">
                                 <path d="M12 5a2 2 0 11-2 2 2 2 0 012-2zm0 7a2 2 0 11-2 2 2 2 0 012-2zm0 7a2 2 0 11-2 2 2 2 0 012-2z" />
                              </svg>
                           </span>
                        </button>
                     </td>
                     {/* </div> */}

                  </tr>

               </tbody>
            </table>
         </div>
      </>
   );
}