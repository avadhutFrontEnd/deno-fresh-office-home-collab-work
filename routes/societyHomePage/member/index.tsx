import Navbar from "../../../components/AppLayoutComponents/Navbar.tsx";
import Sidebar from "../../../islands/AppLayoutIslands/sider-bar.tsx";
import SetUpUnitMember from "../setUpUnitMember.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            <SetUpUnitMember>
                <div class="flex flex-col h-full w-full ">
                    <div class="h-1/6 w-full flex flex-row items-center">
                        <ul
                            role="list"
                            class=" h-full w-full divide-y divide-gray-200 dark:divide-gray-700 flex flex-row items-center justify-center  "
                        >
                            <li class=" h-full py-3 sm:py-4 mx-2">
                                <div class=" h-full flex items-center space-x-3 rtl:space-x-reverse">
                                    <div class="hfull flex-shrink-0">
                                        <a href="/societyHomePage/member/uploadMember">
                                            <img
                                                class=" h-24 w-24 p-1  rounded-full  ring-2 ring-gray-300 dark:ring-gray-500 "
                                                src="/uploadimg.png"
                                                alt="upload"
                                            ></img></a>
                                    </div>
                                </div>
                            </li>

                            <li class=" h-full py-3 sm:py-4 mx-2">
                                <div class=" h-full flex items-center space-x-3 rtl:space-x-reverse">
                                    <div class="hfull flex-shrink-0">
                                        <a href="/societyHomePage/member/enterMember">
                                            <img
                                                class=" h-24 w-24 p-1  rounded-full  ring-2 ring-gray-300 dark:ring-gray-500 "
                                                src="/entry.png"
                                                alt="avatar"
                                            ></img>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="h-full w-full">
                        {props.children}
                    </div>
                </div>
            </SetUpUnitMember>
        </>
    );
}