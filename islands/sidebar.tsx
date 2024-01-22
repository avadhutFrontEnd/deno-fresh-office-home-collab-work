import { useSignal } from "@preact/signals";
import SidebarItem from "./sidebar-item.tsx";
import { useState } from "preact/hooks";

export default function Sidebar() {
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
                                {"title": "101", "icon": "unit.png", "details": "pqr-1", "key": "wing-A-unit-101-key"},
                                {"title": "102", "icon": "unit.png", "details": "pqr-2", "key": "wing-A-unit-102-key"},
                                {"title": "103", "icon": "unit.png", "details": "pqr-3", "key": "wing-A-unit-103-key"}
                            ]
                        },
                        {
                            "title": "floor-2",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "201", "icon": "unit.png", "details": "pqr-1", "key": "wing-A-unit-201-key"},
                                {"title": "202", "icon": "unit.png", "details": "pqr-2", "key": "wing-A-unit-202-key"},
                                {"title": "203", "icon": "unit.png", "details": "pqr-3", "key": "wing-A-unit-203-key"}
                            ]
                        },
                        {
                            "title": "floor-3",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "301", "icon": "unit.png", "details": "pqr-1", "key": "wing-A-unit-301-key"},
                                {"title": "302", "icon": "unit.png", "details": "pqr-2", "key": "wing-A-unit-302-key"},
                                {"title": "303", "icon": "unit.png", "details": "pqr-3", "key": "wing-A-unit-303-key"}
                            ]
                        },
                        {
                            "title": "floor-4",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "401", "icon": "unit.png", "details": "pqr-1", "key": "unit-401-key"},
                                {"title": "402", "icon": "unit.png", "details": "pqr-2", "key": "unit-402-key"},
                                {"title": "403", "icon": "unit.png", "details": "pqr-3", "key": "unit-403-key"}
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
                                {"title": "101", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-101-key"},
                                {"title": "101", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-102-key"},
                                {"title": "101", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-103-key"}
                            ]
                        },
                        {
                            "title": "floor-2",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "201", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-201-key"},
                                {"title": "202", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-202-key"},
                                {"title": "203", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-203-key"}
                            ]
                        },
                        {
                            "title": "floor-3",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "301", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-301-key"},
                                {"title": "302", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-302-key"},
                                {"title": "303", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-303-key"}
                            ]
                        },
                        {
                            "title": "floor-4",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "401", "icon": "unit.png", "details": "pqr-1", "key": "wing-B-unit-401-key"},
                                {"title": "402", "icon": "unit.png", "details": "pqr-2", "key": "wing-B-unit-402-key"},
                                {"title": "403", "icon": "unit.png", "details": "pqr-3", "key": "wing-B-unit-403-key"}
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
                                {"title": "101", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-101-key"},
                                {"title": "101", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-102-key"},
                                {"title": "101", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-103-key"}
                            ]
                        },
                        {
                            "title": "floor-2",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "201", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-201-key"},
                                {"title": "202", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-202-key"},
                                {"title": "203", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-203-key"}
                            ]
                        },
                        {
                            "title": "floor-3",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "301", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-301-key"},
                                {"title": "302", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-302-key"},
                                {"title": "303", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-303-key"}
                            ]
                        },
                        {
                            "title": "floor-4",
                            "icon": "xyz.png",
                            "units": [
                                {"title": "401", "icon": "unit.png", "details": "pqr-1", "key": "wing-C-unit-401-key"},
                                {"title": "402", "icon": "unit.png", "details": "pqr-2", "key": "wing-C-unit-402-key"},
                                {"title": "403", "icon": "unit.png", "details": "pqr-3", "key": "wing-C-unit-403-key"}
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    
    console.log(JSON.stringify(items, null, 2));
    

    const [value, setValue] = useState({});

    const sidebar = useSignal([{ "title": "Please !!! Select Floor" }]);

    const SidebarFunction = (para) => {
        console.log("sidebar :", para)
    }
    const obj = sidebar.value
    return (
        <>
            {/*-----------------  Class = sidebar */}
            <div className="w-2/6 flex-shrink-0 bg-white h-full border-2 overflow-auto">
                {items.map((item, index) => <SidebarItem key={index} item={item} sidebar={sidebar} value={value} onSidebarFunction={SidebarFunction} />)}
            </div>
            {/*-----------------  Class = container */}
            <div class=" w-4/6 border-2 border-red-500 border-solid ">
                {/* Content panel */}
                {/* {console.log("sidebar signal value change :",sidebar)} */}

                {console.log(obj)}

                <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
                    {sidebar.value.map((item) => (
                            <div key={item.key} class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                                <div class="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                                    </path>
                                </svg></div>
                                <div class="px-4 text-gray-700">
                                    <h3 class="text-sm tracking-wider">Unit No</h3>
                                    <p class="text-3xl">{item.title}</p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}