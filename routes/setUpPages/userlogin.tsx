import { signal } from "@preact/signals";
import React from "preact/compat";


export default function newVideoEdit(props: PageProps) {
    const errorMsg = signal(0);
  
    return (
        <>
            <div class="flex flex-col h-[100vh] ">
                <div class="h-[95vh] flex flex-row border-10 border-solid  bg-white ">
                    {/* Form  */}
                    {/* <!--Form  component --> */}
                    <div class="bg-gray-100 flex items-center justify-center w-full h-full">
                        <div class="container max-w-screen-lg mx-auto">
                            <div class="">

                                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6" >
                                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                        Welcome to
                                        <span class="text-blue-600 dark:text-blue-500">
                                            &nbsp;chaos&nbsp;
                                        </span>
                                    </h1>

                                    <div
                                        class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
                                    >
                                        <div class="text-gray-600   ">
                                            <div class="border-2 rounded-full mr-2 my-auto">
                                                {/* <img class="" src="/profile.png" alt="society icon" /> */}
                                            </div>
                                        </div>

                                        <div class="lg:col-span-2">
                                            {/* <div class="mt-4 text-sm text-red-600 text-center">{errorMsg}</div> */}
                                            <form action="" method="POST" class="space-y-4">
                                                {/* <!-- Your form elements go here --> */}
                                                <div>
                                                    <label
                                                        for="username"
                                                        class="block text-sm font-medium text-gray-900"
                                                    >
                                                        User ID
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        placeholder=""
                                                        required
                                                        class={errorMsg != "Login does not exist"
                                                            ? "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                                            : "mt-1 p-2 w-full border-2 ring-2 ring-red-500 rounded-md focus:border-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300"}
                                                    />
                                                </div>
                                                <div>
                                                    <div>
                                                        <label
                                                            for="email"
                                                            class="block text-sm font-medium text-gray-900"
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="email"
                                                            name="password"
                                                            placeholder=""
                                                            required
                                                            class={errorMsg != "Login passowrd is wrong"
                                                                ? "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                                                : "mt-1 p-2 w-full border-2 ring-2 ring-red-500 rounded-md focus:border-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300"}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="flex items-start">
                                                    <div class="flex items-start">
                                                        <div class="flex items-center h-5">
                                                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                                        </div>
                                                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                                    </div>
                                                    <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password ?</a>
                                                </div>
                                                <div class="flex justify-between">
                                                    <a href="/app/login/ExistingCustomerForm">
                                                        <div class="text-sm text-[#66A146] cursor-pointer hover:text-black hover:underline ">
                                                            {/* Verify Existing customer */}
                                                        </div>
                                                    </a>


                                                </div>
                                                <div>
                                                    <a
                                                        href="/societyHomePage"
                                                        class="text-black hover:underline"
                                                    >
                                                        <button
                                                            type="submit"
                                                            class="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                                        >
                                                            Login
                                                        </button>
                                                    </a>
                                                </div>
                                            </form>
                                            {/* <div class="mt-4 text-sm text-gray-600 text-center">
                                                <p>
                                                    Already have an account?{" "}
                                                    <a
                                                        href="/setUpPages/signUp"
                                                        class="text-black hover:underline"
                                                    >
                                                        Register here
                                                    </a>
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full h-[5vh] flex flex-row justify-center items-center border-2 border-solid">
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://chintan.in/" class="hover:underline">Chaos chintan's product™</a>. All Rights Reserved.</span>
            </div>
        </>
    );
}
