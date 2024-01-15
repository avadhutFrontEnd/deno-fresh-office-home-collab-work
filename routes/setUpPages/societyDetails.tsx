import { signal } from "@preact/signals";
import React from "preact/compat";
import SetUp from "../index.tsx";

export default function newVideoEdit(props: PageProps) {
  const count = signal(0);
  return (
    <>
    <SetUp>
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
                      <p class=" font-bold text-lg ">Enter Details of <span class="text-blue-600 dark:text-blue-500">
                                            Sukh Sagar CHS 
                                        </span></p>
                      <p class="text-gray-500 mb-6">All Fields are Mandatory*</p>
                      <div class="border-2 rounded-full mr-2 my-auto">
                        <img class="" src="/society.png" alt="society icon" />
                      </div>
                    </div>

                    <div class="lg:col-span-2">
                      
                      <div
                        class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                      >
                        {/* <div class="md:col-span-5">
                          <label for="full_name">Society Name</label>
                          <input
                            type="text"
                            name="SocietyName"
                            id="SocietyName"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="Prestige Residency Marigold CHS Ltd"
                          />
                        </div> */}

                        <div class="md:col-span-5">
                          <label for="full_name">Address Line 1</label>
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
                          <label for="full_name">Address Line 2</label>
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
                          <label for="email">Landmark</label>
                          <input
                            type="text"
                            name="Landmark"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="near jeevan vikas hospital"
                          />
                        </div>

                        {/* <div class="md:col-span-4">
                          <label for="address">Street</label>
                          <input
                            type="text"
                            name="Street"
                            id="Street"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="sahara road"
                          />
                        </div> */}

                        <div class="md:col-span-2">
                          <label for="city">District</label>
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
                          <label for="city">State</label>
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

                        <div class="md:col-span-5">
                          <label for="full_name">Society Registration Number</label>
                          <input
                            type="text"
                            name="SocietyName"
                            id="SocietyName"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="xxxx123xxx345"
                          />
                        </div>

                        <div class="md:col-span-2">
                          <label for="city">PAN Number</label>
                          <input
                            type="text"
                            name="district"
                            id="district"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="ABCTY1234D."
                          />
                        </div>

                        <div class="md:col-span-2">
                          <label for="city">TAN Number</label>
                          <input
                            type="text"
                            name="district"
                            id="district"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="PDES03028F"
                          />
                        </div>

                        <div class="md:col-span-2">
                          <label for="city">GST Number</label>
                          <input
                            type="text"
                            name="district"
                            id="district"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value=""
                            placeholder="Enter GSTIN/UIN of the Taxpayer"
                          />
                        </div>


                        {/* <div class="md:col-span-5">
                          <div class="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="billing_same"
                              id="billing_same"
                              class="form-checkbox"
                            />
                            <label for="billing_same" class="ml-2"
                            >By checking this box, you are agreeing to our terms of service.</label>
                          </div>
                        </div> */}

                        <div class="md:col-span-5 text-right">
                          <div class="inline-flex items-end">
                            <a href="#">
                              <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Submit
                              </button></a>
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
    </SetUp>
    </>
  );
}
