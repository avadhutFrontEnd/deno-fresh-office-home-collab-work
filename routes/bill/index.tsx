import GenerateBill from "./(_islands)/generate-bill.tsx";
// import SetUpUnitMember from "../setUpUnitMember.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
// import AppLayout from "../../../../templates/layout/AppLayout.tsx";
import FlowBitSidebar from "./(_islands)/flowBitSidebar.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            {/* <AppLayout> */}
                {/* {props.children} */}
                {/* <GenerateBill /> */}
            {/* </AppLayout> */}
            <div class="flex flex-col h-screen w-screen ">
                <div class="flex-1 flex flex-col border-10 border-solid bg-red-200 mb-10 overflow-x-hidden ">
                    <FlowBitSidebar />
                </div>
                <div class="w-full flex flex-row justify-center items-center border-t-2 border-solid border-gray-400  h-10 fixed bottom-0 left-0 z-40 ">
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://chintan.in/" class="hover:underline">SCAI chintan's product™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </>
    );
}