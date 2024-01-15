import EnterBillingHeads from "../../../islands/societyHomePage/enter-billing-heads.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import Unit from "../index.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
        <Unit>
            <EnterBillingHeads />
        </Unit>
        </>
    );
}