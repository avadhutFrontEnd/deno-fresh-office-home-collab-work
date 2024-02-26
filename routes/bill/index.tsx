import GenerateBill from "./(_islands)/generate-bill.tsx";
// import SetUpUnitMember from "../setUpUnitMember.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
// import AppLayout from "../../../../templates/layout/AppLayout.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            {/* <AppLayout> */}
                {/* {props.children} */}
                <GenerateBill />
            {/* </AppLayout> */}
        </>
    );
}