import GenerateBill from "./generate-bill.tsx";
// import SetUpUnitMember from "../setUpUnitMember.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
// import AppLayout from "../../../../templates/layout/AppLayout.tsx";
import HambergerButton from "../../../components/billComponents/HambergerButton.tsx";
import Sidebar from "../../../components/billComponents/Sidebar.tsx";
import Content from "../../../components/billComponents/Content.tsx";
import FlexSidebar from "../../../components/billComponents/FlexSidebar.tsx";
import FlexContent from "../../../components/billComponents/FlexContent.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function FlowBitSidebar(props: ChildrenProps) {

    return (  
        <>
            {/* <HambergerButton />
            <Sidebar />
            <Content /> */}
            <FlexSidebar />
            <FlexContent />
        </>
    );
}

