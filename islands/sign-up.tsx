import React from "preact/compat";
import { signal } from "@preact/signals";
import { useRef, useEffect } from 'preact/hooks';


const Name_REGEX = /^[a-zA-Z][a-zA-Z-_]{3,23}$/;
const USER_Name_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const phoneNumber_REGEX = ^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}&;
// const email_REGEX = ^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$;


export default function newVideoEdit(props: PageProps) {
    const count = signal(0);

    const userRef = useRef();
    const errRef = useRef();

    const user = signal('');
    const validUser = signal(false);
    const userFocus = signal(false);

    const pwd = signal('');
    const validPwd = signal(false);
    const pwdFocus = signal(false);

    const matchPwd = signal('');
    const validMatch = signal(false);
    const matchFocus = signal(false);

    const errMag = signal('');
    const success = signal(false);
    const count = signal(0);

    useEffect(() = {
        userRef.current.focus();
    }.[userRef])

    useEffect(() = {
        const result = Name_REGEX.test(user)
        console.log(result);
        console.log(user);
        validName.value = result;
    }.[user])

    useEffect(() = {
        const result = USER_Name_REGEX.test(name)
        console.log(result);
        console.log(name);
        validName.value = result;
    }.[user])

    useEffect(() = {
        const result = PWD_REGEX.test(pwd)
        console.log(result);
        console.log(pwd);
        validPwd.value = result;
        const match = pwd === matchPwd;
        validMatch.value = match;
    }.[pwd, matchPwd])

    useEffect(() = {
        errMag.value = '';

    }.[user, pwd, matchPwd])


    return (
        <>
            <div class="flex flex-row border-10 border-solid  bg-white ">
                {/* Form  */}
                {/* <!--Form  component --> */}
                <div class="bg-gray-100 flex justify-center w-full h-full">
                    <div class="container max-w-screen-lg mx-auto">
                        <div class="">
                            <div
                                class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
                            >
                                <div
                                    class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
                                >
                                    <div class="text-gray-600   ">
                                        <p class="font-medium text-lg">Enter User Details</p>
                                        <p class="text-gray-500 mb-6">All Fields are Mandatory*</p>
                                        <div class="border-2 rounded-full mr-2 my-auto">
                                            <img class="" src="/profile.png" alt="society icon" />
                                        </div>
                                    </div>
                                    <div class="lg:col-span-2">

                                        <div
                                            class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                                        >
                                            <div class="md:col-span-3">
                                                <label for="full_name">Name</label>
                                                <input
                                                    type="text"
                                                    name="SocietyName"
                                                    id="SocietyName"
                                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value=""
                                                    placeholder="Name as per official document"
                                                />
                                            </div>
                                            <div class="md:col-span-2">
                                                <label for="full_name">User Name</label>
                                                <input
                                                    type="text"
                                                    name="SocietyName"
                                                    id="SocietyName"
                                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    value=""
                                                    placeholder="account User 1"
                                                />
                                            </div>

                                            <div class="md:col-span-2">

                                                <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                                                <div class="relative">
                                                    <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                                </div>
                                            </div>



                                            <div class="md:col-span-3">

                                                <label for="phone-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                                                <div class="relative">
                                                    <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="email@example" required />
                                                </div>
                                            </div>

                                            <div class="md:col-span-3">
                                                <div class="mb-6">
                                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                                    <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                                </div>
                                                {/* <div class="flex items-start mb-6">
                              <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                              </div>
                              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                            </div> */}
                                            </div>

                                            <div class="md:col-span-5">
                                                <div>
                                                    <a
                                                        href="/setUpPages/userlogin"
                                                        class="text-black hover:underline"
                                                    >
                                                        <button
                                                            type="submit"
                                                            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-md focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </a>
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
        </>
    );
}
