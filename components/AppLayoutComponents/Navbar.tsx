import { asset } from "$fresh/runtime.ts";
import Breadcrumbs from "../../components/societyHomePage/BreadCrumbs.tsx";

export default function navbar(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <section class="border-b-4 border-white text-white sticky top-0 z-50 ">
        <div class=" h-[72px]  w-screen flex flex-row justify-between bg-gradient-to-r from-blue-400 to-blue-500 ... ">

          <div class="">
            <h1 class="mx-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-auto mb-auto">
              <div class="flex flex-row justify-center"> <img src="/communities.png" class="mx-2" /> <span class="text-6xl items-center text-white">Chaos</span></div>
            </h1>
          </div>

          <div class="">
            <h1 class="mx-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-auto mb-auto">
              <span class="text-2xl items-center text-white">Sukh Sagar CHS </span>
            </h1>
          </div>

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
      </section>
      <Breadcrumbs></Breadcrumbs>

    </>
  );
}