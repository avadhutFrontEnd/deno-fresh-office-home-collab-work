import { AppProps } from "$fresh/server.ts";
import Navbar from "../../components/AppLayoutComponents/Navbar.tsx";
import Sidebar from "../../islands/AppLayoutIslands/sider-bar.tsx";

import { ComponentChildren } from "preact";
import { useSignal } from "@preact/signals";
import { Component } from 'preact';

interface ChildrenProps {
    children: ComponentChildren;
}

export default function AppLayout({ children }: ChildrenProps) {

    return (
        <>
            <div class="flex flex-col h-[100vh] ">
                {/* Header */}
                {/* <div class="h-[8vh] flex flex-row border-10 border-solid  bg-white ">
                    <Navbar></Navbar>
                </div> */}

                {/* Main Content */}
                <div class="h-[95vh] flex flex-col border-10 border-solid  bg-white ">
                    <Navbar></Navbar>
                    <Sidebar>{children}</Sidebar>
                </div>

                {/* Footer */}
                <div class="w-full h-[5vh] flex flex-row justify-center items-center border-2 border-solid">
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://chintan.in/" class="hover:underline">Chaos chintan's product™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </>
    );
}



// [
//     {
//         "title": "building 1",
//         "icon": "xyz.png",
//         "children": [
//             {
//                 "title": "wing-A",
//                 "icon": "xyz.png",
//                 "children": [
//                     {
//                         "title": "floor-1",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "floor-2",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-201",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-202",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-203",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "floor-3",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-301",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-302",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-303",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]

//                     },
//                     {
//                         "title": "floor-4",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-401",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-402",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-403",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     }
//                 ]
//             },{
//                 "title": "wing-B",
//                 "icon": "xyz.png",
//                 "children": [
//                     {
//                         "title": "floor-1",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "floor-2",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-201",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-202",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-203",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "floor-3",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-301",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-302",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-303",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]

//                     },
//                     {
//                         "title": "floor-4",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-401",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-402",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-403",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     }
//                 ]
//             },{
//                 "title": "wing-C",
//                 "icon": "xyz.png",
//                 "children": [
//                     {
//                         "title": "floor-1",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-101",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "floor-2",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-201",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-202",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-203",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "floor-3",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-301",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-302",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-303",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]

//                     },
//                     {
//                         "title": "floor-4",
//                         "icon": "xyz.png",
//                         "children": [
//                             {
//                                 "title": "unit-401",
//                                 "icon": "unit.png",
//                                 "details": "pqr-1"
//                             },
//                             {
//                                 "title": "unit-402",
//                                 "icon": "unit.png",
//                                 "details": "pqr-2"
//                             },
//                             {
//                                 "title": "unit-403",
//                                 "icon": "unit.png",
//                                 "details": "pqr-3"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]
