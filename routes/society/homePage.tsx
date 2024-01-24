import React from "preact/compat";
import { signal } from "@preact/signals";
import { useSignal } from "@preact/signals";
import { Handlers } from "$fresh/server.ts";
import SocietyController from "@app/modules/society/controller.ts";

import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
import { parse } from "std/datetime/mod.ts";
import { Review } from "./(_islands)/review.tsx";


type SocietyPayload = {
    name?: string;
    address1?: string;
    address2?: string;
    city?: string;
    district?: string;
    state?: string;
    country?: string;
    registration_no?: string;
    registration_date?: string;
    GST_no?: string;
    PAN_no?: string;
    TAN_no?: string;
};

type InfrastructurePayload = {
    no?: number;
    building?: string;
    wing?: string;
    floor?: string;
    unit_no?: string;
    mofa_area?: string;
    standard_area?: string;
}

// --------------------------------------------------------------

export const handler: Handlers = {
    async GET(req, ctx) {
        const u = new URL(req.url);
        // console.log(req.url);
        const errorCode = u.searchParams.get('errorCode');
        if (errorCode && loginErrors.has(errorCode)) {
            return await ctx.render({ error: loginErrors.get(errorCode) });
        }
        return await ctx.render({});
    },

    async POST(req, ctx) {
        const u = new URL(req.url);
        const form = await req.formData();
        const name = form.get("SocietyName")?.toString();
        const address1 = form.get("AddressLine1")?.toString();
        const address2 = form.get("AddressLine2")?.toString();
        const city = form.get("city")?.toString();
        const district = form.get("district")?.toString();
        const state = form.get("state")?.toString();
        const country = form.get("country")?.toString();
        const registration_no = form.get("SocietyRegistrationNumber")?.toString();
        const registration_date = form.get("SocietyRegistrationDate")?.toString();
        const GST_no = form.get("gstnumber")?.toString();
        const PAN_no = form.get("pannumber")?.toString();
        const TAN_no = form.get("tannumber")?.toString();

        const SocietyDetailsPayload: SocietyPayload = {
            name: name,
            address1: address1,
            address2: address2,
            city: city,
            district: district,
            state: state,
            country: country,
            registration_no: registration_no,
            registration_date: registration_date,
            GST_no: GST_no,
            PAN_no: PAN_no,
            TAN_no: TAN_no
        };

        // SocietyPayloadResp : response for  successful Society Details Submission
        const SocietyPayloadResp = await SocietyController.create(SocietyDetailsPayload.name, SocietyDetailsPayload.address1, SocietyDetailsPayload.address2,
            SocietyDetailsPayload.city, SocietyDetailsPayload.district, SocietyDetailsPayload.state, SocietyDetailsPayload.country,
            SocietyDetailsPayload.registration_no, SocietyDetailsPayload.registration_date, SocietyDetailsPayload.GST_no,
            SocietyDetailsPayload.PAN_no, SocietyDetailsPayload.TAN_no);

        // console.log(SocietyPayloadResp.id);

        if (SocietyPayloadResp.id) {
            const headers = new Headers();
            const queryParams = `app/userLogin`;

            headers.set("location", queryParams);
            const path = u.protocol + "//" + u.host + "/" + queryParams
            console.log("P", path);
            return Response.redirect(path, 302);
        } else {
            const headers = new Headers();
            headers.set("location", "/app/login?errorCode=" + resp.code);
            return new Response(null, {
                status: 301,
                headers,
            });
        }
    },
};

// ----------------------------------------------------------------

export default function userLogin() {
   

    return (
        <>
            <div class="flex flex-col h-screen ">
                {/* bg */}
                <div class="h-[95vh]  flex flex-col border-10 border-solid  bg-cover bg-local bg-center bg-no-repeat bg-blend-multiply bg-slate-500 " style={asset("background-image: url('/assets/images/cf5d1987f603b98.jpeg') ")} >
                    {/* Haeder */}
                    <div class=" h-[10%] flex flex-row justify-between items-center">
                        <div class="">
                            <h1 class="mx-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-auto mb-auto">
                                <div class="flex flex-row justify-center"> <img src="/assets/avatars/communities.png" class="mx-2" /> <span class="text-6xl items-center text-white">Chaos</span></div>
                            </h1>
                        </div>

                        <div class="flex flex-row items-center pr-3">
                            <ul
                                role="list"
                                class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 flex flex-row "
                            >
                                <li class="py-3 sm:py-4 mx-2">
                                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                        {/* <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"> */}
                                        <img src="/assets/avatars/settings.png" class=" mx-1 h-12" />
                                        <span class="  text-white text-4xl"> Initial Setup </span>
                                        {/* </span> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                    <div class="  h-[90%]  flex flex-row w-full ">
                        <div class=" max-h-full flex flex-col w-1/3  p-4">
                            <section class=" h-full w-full "> {/* overflow-scroll */}
                                <div class="flex flex-col h-full w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                                    {/* Heading */}
                                    <ul class="h-1/6 my-2">
                                        <li>
                                            <div class="flex items-baseline  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                <svg class="w-6 h-6 mx-2 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                                                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                                                </svg>
                                                <span class="flex-1 ms-3 whitespace-nowrap text-2xl ">Enter Society Details</span>
                                            </div>
                                        </li>
                                        <li>
                                            <p class=" text-xs font-normal text-gray-500 dark:text-gray-400">All Fields are Maindatory*</p>
                                        </li>
                                    </ul>

                                    {/* form -> isko "Over-flow karo" */}
                                    <div class=" h-5/6 my-2  ">
                                        <div class=" h-full ">
                                            <form class=" h-full space-y-4" method="post" action="">
                                                <div class=" h-full overflow-y-scroll  grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                    <div class="md:col-span-5">
                                                        <label for="SocietyName">Society Name</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyName"
                                                            id="SocietyName"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="text"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-5">
                                                        <label for="AddressLine1">Address Line 1</label>
                                                        <input
                                                            type="text"
                                                            name="AddressLine1"
                                                            id="AddressLine1"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="text"
                                                        />
                                                    </div>
                                                    <div class="md:col-span-5">
                                                        <label for="AddressLine2">Address Line 2</label>
                                                        <input
                                                            type="text"
                                                            name="AddressLine2"
                                                            id="AddressLine2"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="text"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="city">City</label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="near jeevan vikas hospital"
                                                        />
                                                    </div>
                                                    <div class="md:col-span-2">
                                                        <label for="district">District</label>
                                                        <input
                                                            type="text"
                                                            name="district"
                                                            id="district"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Mumbai Suburban"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="state">State</label>
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            id="state"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Maharashtra"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="country">Country</label>
                                                        <div
                                                            class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                                                        >
                                                            <input
                                                                name="country"
                                                                id="country"
                                                                placeholder="India"
                                                                class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                                value=""
                                                            />
                                                            <button
                                                                tabindex="-1"
                                                                class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                                            >
                                                                <svg
                                                                    class="w-4 h-4 mx-2 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </button>
                                                            <button
                                                                tabindex="-1"
                                                                for="show_more"
                                                                class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                                            >
                                                                <svg
                                                                    class="w-4 h-4 mx-2 fill-current"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    <polyline
                                                                        points="18 15 12 9 6 15"
                                                                    ></polyline>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div class="md:col-span-4">
                                                        <label for="SocietyRegistrationNumber">Society Registration Number</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyRegistrationNumber"
                                                            id="SocietyRegistrationNumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="xxxx123xxx345"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-4">
                                                        <label for="SocietyRegistrationDate">Society Registration Date</label>
                                                        <input
                                                            type="text"
                                                            name="SocietyRegistrationDate"
                                                            id="SocietyRegistrationDate"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="ABCTY1234D."
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="pannumber">PAN Number</label>
                                                        <input
                                                            type="text"
                                                            name="pannumber"
                                                            id="pannumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="ABCTY1234D."
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="tannumber">TAN Number</label>
                                                        <input
                                                            type="text"
                                                            name="tannumber"
                                                            id="tannumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="PDES03028F"
                                                        />
                                                    </div>

                                                    <div class="md:col-span-2">
                                                        <label for="gstnumber">GST Number</label>
                                                        <input
                                                            type="text"
                                                            name="gstnumber"
                                                            id="gstnumber"
                                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                            value=""
                                                            placeholder="Enter GST/UIN of the Taxpayer"
                                                        />
                                                    </div>
                                                    <div class="md:col-span-5 text-right">
                                                        <div class="inline-flex items-end">
                                                            <button
                                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/*  Part 2 :*/}
                        <Review></Review>
                    </div>
                </div>
                <div class="w-full h-[5vh] flex flex-row justify-center items-center border-2 border-solid">
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a href="http://chintan.in/" class="hover:underline">
                            SCAI™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </>
    );
}
