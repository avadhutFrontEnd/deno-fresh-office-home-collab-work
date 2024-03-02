
export default function Sidebar() {
  return (
    <>
      <aside id="sidebar-multi-level-sidebar" class="fixed inset-y-0 left-0 flex-wrap items-center justify-between block  p-0 my-3 mx-4 transition-all duration-200 -translate-x-full bg-white border-0 shadow-none xl:ml-4 dark:bg-gray-950 ease-soft-in-out z-990 rounded-2xl xl:translate-x-0 xl:bg-transparent ps ps--active-y max-w-64 overflow-y-auto          z-40 w-64 h-[calc(100vh-4rem)] sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full overflow-y-auto bg-white dark:bg-gray-800">
          <div class="h-20">
            <i class="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 dark:text-white xl:hidden" aria-hidden="true" sidenav-close-btn=""></i>
            <a class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white" href=" https://localhost:8000/bill" target="_blank">
              <img src="/images/scai.png" class="inline-block h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:hidden" alt="main_logo" />
              <img src="" class="hidden h-full max-w-full transition-all duration-200 ease-soft-in-out max-h-8 dark:inline-block" alt="main_logo" />
              <span class="ml-1 font-semibold transition-all duration-200 ease-soft-in-out">SCAI</span>
            </a>
          </div>
          <hr class=" h-px mt-0 mb-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />



          {/* A : Page 1 */}
          <div class="items-center block w-full h-auto grow basis-full" id="sidenav-collapse-main">
            <ul class="flex flex-col pl-0 mb-0 list-none">
              {/* Section 1  */}
              <li class="mt-0.5 w-full">



                {/* Section 1  _________ Header */}
                <a active_primary="" collapse_trigger="primary" href="javascript:;" class=" after:ease-soft-in-out after:font-awesome-3-free ease-soft-in-out text-sm py-3 active xl:shadow-soft-xl my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-blue-500/30 px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold after:text-slate-800 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 after:content-['_↗']  border border-solid " aria-expanded="true">
                  <div class="stroke-none shadow-soft-sm bg-gradient-to-tl from-purple-700 to-pink-500 mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2 text-center text-black">
                    <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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





                {/* Section 1  _________  Button BOX */}
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out" id="dashboardsExamples" style="max-height: 184px;">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    {/* item 1 */}
                    <li class="w-full">
                      <a active_page="" active_secondary="" class="ease-soft-in-out py-2 pl-4 text-sm before:-left-5 relative my-0 mr-4 flex items-center whitespace-nowrap rounded-lg bg-transparent pr-4 font-semibold text-slate-800 shadow-none transition-colors before:absolute before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800 dark:text-white dark:opacity-100 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-6" href="../../pages/dashboards/default.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> D </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Default </span>
                      </a>
                    </li>
                    {/* item 2 */}
                    <li class="w-full">
                      <a class="ease-soft-in-out py-2 pl-4 text-sm before:-left-5 before:h-1 before:w-1 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-6" href="../../pages/dashboards/automotive.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> A </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Automotive </span>
                      </a>
                    </li>
                    {/* item 3 */}
                    <li class="w-full">
                      <a class="ease-soft-in-out py-2 pl-4 text-sm before:-left-5 before:h-1 before:w-1 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-6" href="../../pages/dashboards/smart-home.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> S </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Smart Home </span>
                      </a>
                    </li>
                    {/* item 4 */}
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-2 pl-4 text-sm before:-left-5 before:h-1 before:w-1 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['_↗'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-6" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> V </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Virtual Reality <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="vrExamples">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">

                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/dashboards/vr/vr-default.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none ease-soft-in-out text-xs opacity-0"> V </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> VR Default </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/dashboards/vr/vr-info.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none ease-soft-in-out text-xs opacity-0"> V </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> VR Info </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* item 5 */}
                    <li class="w-full">
                      <a class="ease-soft-in-out py-2 pl-4 text-sm before:-left-5 before:h-1 before:w-1 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-6" href="../../pages/dashboards/crm.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> C </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> CRM </span>
                      </a>
                    </li>

                  </ul>
                </div>
              </li>


              <li class="w-full mt-4">
                <h6 class="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60 dark:text-white">PAGES</h6>
              </li>
              {/* 1 */}
              <li class="mt-0.5 w-full">
                <a collapse_trigger="primary" href="javascript:;" class="ease-soft-in-out text-sm py-2.7 active after:ease-soft-in-out after:font-awesome-5-free my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']" aria-controls="pagesExamples" role="button" aria-expanded="false">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>office</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g id="office" transform="translate(153.000000, 2.000000)">
                              <path class="fill-slate-800" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" opacity="0.6"></path>
                              <path class="fill-slate-800" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Pages</span>
                </a>
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="pagesExamples">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> P </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Profile <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="profileExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/profile/overview.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> P </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Profile Overview </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/profile/teams.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> T </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Teams </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/profile/projects.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> A </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> All Projects </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> U </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Users <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="usersExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/users/reports.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> R </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Reports </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/users/new-user.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> N </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> New User </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> A </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Account <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="accountExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/account/settings.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none ease-soft-in-out text-xs opacity-0"> S </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Settings </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/account/billing.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none ease-soft-in-out text-xs opacity-0"> B </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Billing </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/account/invoice.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none ease-soft-in-out text-xs opacity-0"> I </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Invoice </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/account/security.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none ease-soft-in-out text-xs opacity-0"> S </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Security </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> P </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Projects <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="projectsExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/projects/general.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> G </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> General </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/projects/timeline.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> T </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Timeline </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/pages/projects/new-project.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> N </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> New Project </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/pricing-page.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> P </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Pricing Page </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/messages.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> M </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Messages </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/rtl-page.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> R </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> RTL </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/widgets.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> W </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Widgets </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/charts.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> C </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Charts </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/sweet-alerts.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> S </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Sweet Alerts </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/pages/notifications.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> N </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Notifications </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* 2 */}
              <li class="mt-0.5 w-full">
                <a collapse_trigger="primary" href="javascript:;" class="ease-soft-in-out text-sm py-2.7 active after:ease-soft-in-out after:font-awesome-5-free my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']" aria-controls="applicationsExamples" role="button" aria-expanded="false">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>settings</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(304.000000, 151.000000)">
                              <polygon class="fill-slate-800" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                              <path class="fill-slate-800" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
                              <path class="fill-slate-800" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Applications</span>
                </a>
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="applicationsExamples">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/applications/kanban.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> K </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Kanban </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/applications/wizard.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> W </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Wizard </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/applications/datatables.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> D </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> DataTables </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/applications/calendar.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> C </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Calendar </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/applications/analytics.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> A </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Analytics </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* 3 */}
              <li class="mt-0.5 w-full">
                <a collapse_trigger="primary" href="javascript:;" class="ease-soft-in-out text-sm py-2.7 active after:ease-soft-in-out after:font-awesome-5-free my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']" aria-controls="ecommerceExamples" role="button" aria-expanded="false">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg class="text-dark" width="12px" height="12px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>basket</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1869.000000, -741.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g id="basket" transform="translate(153.000000, 450.000000)">
                              <path class="fill-slate-800" d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z" opacity="0.595377604"></path>
                              <path class="fill-slate-800" d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Ecommerce</span>
                </a>
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="ecommerceExamples">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/ecommerce/overview.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> O </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Overview </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> P </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Products <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="productsExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/ecommerce/products/new-product.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> N </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> New Product </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/ecommerce/products/edit-product.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> E </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Edit Product </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/ecommerce/products/product-page.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> P </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Product Page </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/ecommerce/products/products-list.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> P </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Products List </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> O </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Orders <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="ordersExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/ecommerce/orders/list.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> O </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Order List </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/ecommerce/orders/details.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> O </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Order Details </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="../../pages/ecommerce/referral.html">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> R </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Referral </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* 5 */}
              <li class="mt-0.5 w-full">
                <a collapse_trigger="primary" href="javascript:;" class="ease-soft-in-out text-sm py-2.7 active after:ease-soft-in-out after:font-awesome-5-free my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']" aria-controls="authExamples" role="button" aria-expanded="false">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg width="12px" height="12px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>document</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(154.000000, 300.000000)">
                              <path class="fill-slate-800" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"></path>
                              <path class="fill-slate-800" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Authentication</span>
                </a>
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="authExamples">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> S </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Sign In <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="signinExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/signin/basic.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> B </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Basic </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/signin/cover.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Cover </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/signin/illustration.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> I </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Illustration </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> S </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Sign Up <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="signupExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/signup/basic.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> B </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Basic </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/signup/cover.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Cover </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/signup/illustration.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> I </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Illustration </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> R </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Reset Password <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="resetExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/reset/basic.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> B </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Basic </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/reset/cover.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Cover </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/reset/illustration.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> I </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Illustration </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> L </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Lock <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="lockExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/lock/basic.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> B </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Basic </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/lock/cover.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Cover </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/lock/illustration.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> I </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Illustration </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> 2 </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> 2-Step Verification <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="StepExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/verification/basic.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> B </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Basic </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/verification/cover.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Cover </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/verification/illustration.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> I </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Illustration </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> E </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Error <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="errorExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/error/404.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> E </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Error 404 </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="../../pages/authentication/error/500.html">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> E </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Error 500 </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="mt-0.5 w-full">
                <hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                  <h6 class="pl-6 mb-2 ml-2 font-bold leading-tight uppercase text-xs opacity-60 dark:text-white">DOCS</h6>
              </li>
              <li class="mt-0.5 w-full">
                <a collapse_trigger="primary" href="javascript:;" class="ease-soft-in-out text-sm py-2.7 active after:ease-soft-in-out after:font-awesome-5-free my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']" aria-controls="basicExamples" role="button" aria-expanded="false">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg width="12px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>spaceship</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(4.000000, 301.000000)">
                              <path class="fill-slate-800" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                              <path class="fill-slate-800" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                              <path class="fill-slate-800" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                              <path class="fill-slate-800" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Basic</span>
                </a>
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="basicExamples">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> G </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Getting Started <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="gettingStartedExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/" target="_blank">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> Q </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Quick Start </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/license/soft-ui-dashboard/" target="_blank">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> L </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> License </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/what-is-tailwind-css/soft-ui-dashboard/" target="_blank">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Contents </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="w-full">
                      <a collapse_trigger="secondary" class="after:ease-soft-in-out after:font-awesome-5-free ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\f107'] dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 dark:after:text-white/50 dark:after:text-white before:content-[''] ml-5.4" aria-expanded="false" href="javascript:;">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> F </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Foundation <b class="caret"></b></span>
                      </a>
                      <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="foundationExample">
                        <ul class="flex flex-col flex-wrap pl-0 mb-0 list-none transition-all duration-200 ease-soft-in-out">
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/colors/soft-ui-dashboard/" target="_blank">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> C </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Colors </span>
                            </a>
                          </li>
                          <li class="w-full">
                            <a class="ease-soft-in-out py-1.6 pl-4 text-3.4 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors dark:text-white dark:opacity-60 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/typography/soft-ui-dashboard/" target="_blank">
                              <span class="w-0 leading-tight text-center transition-all duration-200 pointer-events-none text-xs ease-soft-in-out opacity-0"> T </span>
                              <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Typography </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="mt-0.5 w-full">
                <a collapse_trigger="primary" href="javascript:;" class="ease-soft-in-out text-sm py-2.7 active after:ease-soft-in-out after:font-awesome-5-free my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']" aria-controls="componentsExamples" role="button" aria-expanded="false">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>customer-support</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(1.000000, 0.000000)">
                              <path class="fill-slate-800" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" opacity="0.59858631"></path>
                              <path class="fill-slate-800" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                              <path class="fill-slate-800" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Components</span>
                </a>
                <div class="h-auto overflow-hidden transition-all duration-200 ease-soft-in-out max-h-0" id="componentsExamples">
                  <ul class="flex flex-wrap mb-0 list-none transition-all duration-200 ease-soft-in-out pl-4 ml-6">
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/alert/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> A </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Alerts </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/chip/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> B </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Badge </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/button/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> B </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Buttons </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/card/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> C </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Card </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/collapse/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> C </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Collapse </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/dropdown/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> D </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Dropdowns </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/input/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> F </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Forms </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/modal/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> M </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Modal </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/tabs/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> N </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Navs </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/navbar/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> N </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Navbar </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/progress/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> P </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Progress </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/table/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> T </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Tables </span>
                      </a>
                    </li>
                    <li class="w-full">
                      <a class="ease-soft-in-out py-1.6 pl-4 text-sm before:-left-4.5 before:h-1.25 before:w-1.25 relative my-0 mr-4 flex items-center whitespace-nowrap bg-transparent pr-4 font-medium text-slate-800/50 shadow-none transition-colors before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-3xl before:bg-slate-800/50 dark:text-white dark:opacity-60 dark:before:bg-white dark:before:opacity-80 before:content-[''] ml-5.4" href="https://www.creative-tim.com/learning-lab/tailwind/html/tooltip/soft-ui-dashboard/" target="_blank">
                        <span class="w-0 text-center transition-all duration-200 pointer-events-none ease-soft-in-out opacity-0"> T </span>
                        <span class="transition-all duration-100 pointer-events-none ease-soft opacity-100"> Tooltips </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="mt-0.5 w-full">
                <a class="ease-soft-in-out text-sm py-2.7 active my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors dark:text-white dark:opacity-80" href="https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro-tailwind/blob/main/CHANGELOG.md" target="_blank">
                  <div class="stroke-none shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black">
                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>credit-card</title>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(453.000000, 454.000000)">
                              <path class="fill-slate-800" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                              <path class="fill-slate-800" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="ml-1 duration-300 pointer-events-none ease-soft opacity-100">Changelog</span>
                </a>
              </li>

            </ul>
          </div>

          <hr class=" h-px mt-0 mb-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />


          {/* B : Page 2 */}
          <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full ps ps--active-y">
            <ul class="flex flex-col pl-0 mb-0">

              <li class="mt-0.5 w-full">
                <a class="py-2.7 bg-blue-500/10 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors" href="../pages/dashboard.html">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i class="relative ml-3 top-0 leading-normal text-blue-500 ni ni-tv-2 text-sm fa-solid fa-calendar-days"></i>
                  </div>
                  <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
                </a>
              </li>

              <li class="mt-0.5 w-full">
                <a class="py-2.7 bg-blue-500/10 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors " href="../pages/tables.html">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i class="relative ml-3 top-0 text-sm leading-normal text-orange-500 fa-solid fa-envelope ni ni-calendar-grid-58"></i>
                  </div>
                  <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Tables</span>
                </a>
              </li>

              <li class="mt-0.5 w-full">
                <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/billing.html">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                    <i class="relative ml-3 top-0 text-sm leading-normal text-emerald-500 fa-solid fa-list ni ni-credit-card"></i>
                  </div>
                  <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Billing</span>
                </a>
              </li>
              <li class="mt-0.5 w-full">
                <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/virtual-reality.html">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5" style="color: #FFD43B;">
                    <i class="relative ml-3 top-0 text-sm leading-normal text-yellow-500 ni ni-app fa-solid fa-lemon "></i>
                  </div>
                  <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Virtual Reality</span>
                </a>
              </li>
              <li class="mt-0.5 w-full">
                <a class="py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="../pages/rtl.html">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                    <i class="relative ml-3 top-0 text-sm leading-normal text-red-600 ni ni-world-2 fa-brands fa-hive"></i>
                  </div>
                  <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">RTL</span>
                </a>
              </li>
              <li class="w-full mt-4">
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
              </li>
            </ul>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 370px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 282px;"></div></div></div>







        </div>
      </aside>
    </>
  );
}