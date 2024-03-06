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
            <table className="w-full h-fit text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 px-3  border-separate border-spacing-y-2 ">
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
                  <tr class="w-full h-10 items-center rounded-md -indent-2 table-auto text-center   p-3">
                     {/* <div class=" "> */}
                     <td class=" border-l-8 border-solid border-green-400 border-y border-y-gray-200  p-2 pr-4 ml-3 mb-2 rounded-l-lg ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="LimeGreen" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12l0 .01" /><path d="M14.828 9.172a4 4 0 0 1 0 5.656" /><path d="M17.657 6.343a8 8 0 0 1 0 11.314" /><path d="M9.168 14.828a4 4 0 0 1 0 -5.656" /><path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /></svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Status</p>
                           </div>
                        </div>
                     </td>

                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200">
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
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">First Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">Last Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                              <path d="M3 7l9 6l9 -6" />
                           </svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Email</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-filled" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" strokeWidth={0} fill="currentColor" />
                           </svg>
                           <div class="flex flex-col">
                              <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Phone No</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3  text-center inline-flex items-center py-1.5 dark:focus:ring-[#1da1f2]/55">
                              Edit
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4 pl-4  border-y border-y-gray-200">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 ">
                              View
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-y border-y-gray-200    p-2 pr-4  rounded-r-lg  border-r border-solid border-r-gray-200">
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
                  <tr class="w-full h-10 items-center rounded-md -indent-2 table-auto text-center p-3">
                     {/* <div class=" "> */}
                     <td class=" border-l-8 border-solid border-red-400 border-y border-y-gray-200  p-2 pr-4 ml-3 mb-2 rounded-l-lg ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point-off" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="red" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3l18 18" /><path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" /><path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" /><path d="M9.168 14.828a4 4 0 0 1 0 -5.656" /><path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /></svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Status</p>
                           </div>
                        </div>
                     </td>

                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
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
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">First Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex flex-col">
                           <p class="text-blue-gray-900 block font-sans text-xs font-medium leading-normal antialiased opacity-70 pt-0 pb-0">Last Name</p>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200 ">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                              <path d="M3 7l9 6l9 -6" />
                           </svg>
                           <div class="flex flex-col">
                              <p class="text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Email</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200">
                        <div class="flex items-center gap-3">
                           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-filled" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" strokeWidth={0} fill="currentColor" />
                           </svg>
                           <div class="flex flex-col">
                              <p class=" text-blue-gray-900 block font-sans text-xs font-normal leading-normal antialiased pt-0 pb-0">Phone No</p>
                           </div>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4  border-y border-y-gray-200">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3  text-center inline-flex items-center py-1.5 dark:focus:ring-[#1da1f2]/55">
                              Edit
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-b p-2 pr-4 pl-4  border-y border-y-gray-200">
                        <div class="flex items-center justify-center ">
                           <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 ">
                              View
                           </button>
                        </div>
                     </td>
                     <td class="border-blue-gray-50 border-y border-y-gray-200    p-2 pr-4  rounded-r-lg  border-r border-solid border-r-gray-200">
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