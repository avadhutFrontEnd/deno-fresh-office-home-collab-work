import { useSignal } from "@preact/signals";
import SidebarItem from "./sidebar-item.tsx";
import Delete from "./buttons.tsx";
import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";

export default function Sidebar({ siderbarObject , object }) {
    const items = [
        {
            "title": "building 1",
            "icon": "/static/assets/avatars/1building.png",
            "children": [
                {
                    "title": "wing-A",
                    "icon": "/static/assets/avatars/2wings.png",
                    "children": [
                        {
                            "title": "floor-1",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-A-unit-101", "icon": "unit.png", "details": "pqr-1", "key": "wing-A-unit-101-key" },
                                { "title": "wing-A-unit-101", "icon": "unit.png", "details": "pqr-2", "key": "wing-A-unit-102-key" },
                                { "title": "wing-A-unit-101", "icon": "unit.png", "details": "pqr-3", "key": "wing-A-unit-103-key" }
                            ]
                        },
                        {
                            "title": "floor-2",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-A-unit-201", "icon": "unit.png", "details": "pqr-1", "key": "wing-A-unit-201-key" },
                                { "title": "wing-A-unit-202", "icon": "unit.png", "details": "pqr-2", "key": "wing-A-unit-202-key" },
                                { "title": "wing-A-unit-203", "icon": "unit.png", "details": "pqr-3", "key": "wing-A-unit-203-key" }
                            ]
                        },
                        {
                            "title": "floor-3",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-A-unit-301", "icon": "unit.png", "details": "pqr-1", "key": "wing-A-unit-301-key" },
                                { "title": "wing-A-unit-302", "icon": "unit.png", "details": "pqr-2", "key": "wing-A-unit-302-key" },
                                { "title": "wing-A-unit-303", "icon": "unit.png", "details": "pqr-3", "key": "wing-A-unit-303-key" }
                            ]
                        },
                        {
                            "title": "floor-4",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "unit-401", "icon": "unit.png", "details": "pqr-1", "key": "unit-401-key" },
                                { "title": "unit-402", "icon": "unit.png", "details": "pqr-2", "key": "unit-402-key" },
                                { "title": "unit-403", "icon": "unit.png", "details": "pqr-3", "key": "unit-403-key" }
                            ]
                        }
                    ]
                },
                {
                    "title": "wing-B",
                    "icon": "/static/assets/avatars/2wings.png",
                    "children": [
                        {
                            "title": "floor-1",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-B-unit-101", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-101-key" },
                                { "title": "wing-B-unit-101", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-102-key" },
                                { "title": "wing-B-unit-101", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-103-key" }
                            ]
                        },
                        {
                            "title": "floor-2",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-B-unit-201", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-201-key" },
                                { "title": "wing-B-unit-202", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-202-key" },
                                { "title": "wing-B-unit-203", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-203-key" }
                            ]
                        },
                        {
                            "title": "floor-3",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-B-unit-301", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-301-key" },
                                { "title": "wing-B-unit-302", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-302-key" },
                                { "title": "wing-B-unit-303", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-303-key" }
                            ]
                        },
                        {
                            "title": "floor-4",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-B-unit-401", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-401-key" },
                                { "title": "wing-B-unit-402", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-402-key" },
                                { "title": "wing-B-unit-403", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-403-key" }
                            ]
                        }
                    ]
                },
                {
                    "title": "wing-C",
                    "icon": "xyz.png",
                    "children": [
                        {
                            "title": "floor-1",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-C-unit-101", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-101-key" },
                                { "title": "wing-C-unit-101", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-102-key" },
                                { "title": "wing-C-unit-101", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-103-key" }
                            ]
                        },
                        {
                            "title": "floor-2",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-C-unit-201", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-201-key" },
                                { "title": "wing-C-unit-202", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-202-key" },
                                { "title": "wing-C-unit-203", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-203-key" }
                            ]
                        },
                        {
                            "title": "floor-3",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-C-unit-301", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-301-key" },
                                { "title": "wing-C-unit-302", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-302-key" },
                                { "title": "wing-C-unit-303", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-303-key" }
                            ]
                        },
                        {
                            "title": "floor-4",
                            "icon": "xyz.png",
                            "units": [
                                { "title": "wing-C-unit-401", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-401-key" },
                                { "title": "wing-C-unit-402", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-402-key" },
                                { "title": "wing-C-unit-403", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-403-key" }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    // console.log(" ",siderbarObject.value);
    console.log(" sidebar : ",  Array.isArray(object));
    console.log(object.length);
    const sidebar = useSignal([{ "title": "Please !!! Select Floor" }]);

    return (
        <>
            <div className="w-1.5/6 flex-shrink-0  h-full overflow-y-scroll px-3  pt-3 ">
                {items.map((item, index) => <SidebarItem key={index} item={item} sidebar={sidebar} />)}
                {/* {console.log("sider-bar", societyObject.value)} */}
            </div>
            <div class=" w-full ">
                <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
                    {items.map((item) => (
                        <div class="relative group">
                            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                </svg>
                                <div class="space-y-2">
                                    <p class="text-slate-800">{item.title}</p>
                                    <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">View Unit →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                   
                </div>
            </div>
        </>
    )
}