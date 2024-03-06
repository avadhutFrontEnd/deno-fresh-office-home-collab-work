
export default function Sidebar() {
  return (
    <>
      <aside id="sidebar-multi-level-sidebar" class="fixed inset-y-0 inset-x-0 flex-wrap items-center justify-between block  transition-all duration-200 -translate-x-full bg-white border-0 shadow-none  dark:bg-gray-950 ease-soft-in-out z-990  xl:translate-x-0 xl:bg-transparent ps ps--active-y max-w-64 overflow-y-auto z-40 w-[17rem]           h-[calc(100vh-40px)] sm:translate-x-0  border-solid border-gray-500 p-4" aria-label="Sidebar">

        <div class="h-full  bg-white dark:bg-gray-800  border-2 border-solid border-blue-500 rounded-xl flex flex-col">
          {/* Logo */}
          <div class=" h-1/6">
            <i class="absolute top-2 right-2 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 dark:text-white xl:hidden" aria-hidden="true" sidenav-close-btn=""></i>
            <a class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white" href=" https://localhost:8000/bill" target="_blank">
              <img src="/images/scai.png" class="inline-block h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:hidden" alt="main_logo" />
              <img src="" class="hidden h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:inline-block" alt="main_logo" />
              <span class="ml-1 font-semibold transition-all duration-200 ease-soft-in-out">SCAI</span>
            </a>
            <div class=" h-10 w-full sm:bg-blue-500 md:bg-pink-500 lg:bg-red-600 xl:bg-green-400 2xl:bg-yellow-400"></div>
          </div>

          <hr class=" h-px mt-0 mb-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

          <div class="items-center block w-full h-4/6  grow basis-full " id="sidenav-collapse-main">
            <ul class=" h-full flex flex-col pl-0 mb-0 list-none overflow-y-auto">
              {/* Section 1  */}
              <li>
                {/*  */}
                {/* B : Page 2 */}
                <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full ps ps--active-y">
                  <ul class="flex flex-col pl-0 mb-0">

                    <li class="mt-0.5 w-full">
                      <a active_primary="" collapse_trigger="primary" href="javascript:;" class=" after:ease-soft-in-out after:font-awesome-3-free ease-soft-in-out text-sm py-3 active xl:shadow-soft-xl my-0 mx-2 flex items-center whitespace-nowrap rounded-lg bg-blue-500/30 px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 after:content-['_↗']  border border-solid " aria-expanded="true">
                        <div class="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2 text-center text-black">
                          <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                            <title>shop</title>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(0.000000, 148.000000)">
                                    <path class="" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" opacity="0.598981585"></path>
                                    <path class="" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <span class="ml-1 duration-300 pointer-events-none ease-soft text-slate-700 opacity-100">Dashboards</span>
                      </a>
                    </li>

                    {/* <li class="mt-0.5 w-full">
                      <a class="py-2.7 bg-blue-500/10 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors" href="../pages/dashboard.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class="relative top-0 leading-normal text-blue-500 ni ni-tv-2 text-sm fa-solid fa-calendar-days"></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
                      </a>
                    </li> */}

                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 bg-blue-500/10 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors " href="../pages/tables.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class=" fa-solid fa-users text-orange-600" ></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Members</span>
                      </a>
                    </li>

                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/billing.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                          <i class="fa-solid fa-building relative top-0 text-sm leading-normal text-emerald-500 " ></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Units</span>
                      </a>
                    </li>
                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/virtual-reality.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5" style="color: #FFD43B;">
                          <i class="relative top-0 text-sm leading-normal text-yellow-500 ni ni-app fa-solid fa-lemon "></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Bill Heads</span>
                      </a>
                    </li>
                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/rtl.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class="relative top-0 text-sm leading-normal text-red-600 ni ni-world-2 fa-brands fa-hive"></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Templates</span>
                      </a>
                    </li>
                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/rtl.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class="relative top-0 text-sm leading-normal text-red-600 fa-solid fa-list-check"></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Bills</span>
                      </a>
                    </li>
                    {/* <li class="w-full mt-4">
                      <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Account pages</h6>
                    </li>
                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/profile.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class="relative ml-3 top-0 text-sm leading-normal text-slate-700 ni ni-single-02 fa-solid fa-user"></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Profile</span>
                      </a>
                    </li>
                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/sign-in.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class="relative ml-3  top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04 fa-solid fa-signs-post"></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign In</span>
                      </a>
                    </li>
                    <li class="mt-0.5 w-full">
                      <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/sign-up.html">
                        <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                          <i class="relative ml-3 top-0 text-sm leading-normal text-cyan-500 ni ni-collection fa-brands fa-ubuntu"></i>
                        </div>
                        <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign Up</span>
                      </a>
                    </li> */}
                  </ul>
                  {/* <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                  </div>
                  <div class="ps__rail-y" style="top: 0px; height: 370px; right: 0px;">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 282px;"></div>
                  </div> */}
                </div>
              </li>
            </ul>
          </div>


          {/* Notification */}
          <div class=" h-1/6 bg-blue-500">
          <div class="flex flex-row items-center pr-3">
            <ul
              role="list"
              class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 flex flex-row "
            >
              <li class="py-3 sm:py-4 mx-2">
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                  <div class="flex-shrink-0">
                    <img
                      class="w-10 h-10 p-1  rounded-full  ring-2 ring-gray-300 dark:ring-gray-500 "
                      src="/pexels-pixabay-207296.jpg"
                      alt="avatar"
                    ></img>
                  </div>

                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-green-300 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p class="text-sm text-white truncate dark:text-gray-400">
                      email@User.com
                    </p>
                  </div>
                    <span class="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full transition ease-in-out delay-150">
                      <svg class="w-5 h-5 text-blue-800   hover:-translate-y-1 hover:scale-110  duration-300 ..." aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                        <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                        <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                      </svg>
                      <span class="sr-only">Message icon</span>
                    </span>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </aside>
    </>
  );
}