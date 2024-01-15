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