import EnterBillingHeads from "../../../islands/societyHomePage/enter-billing-heads.tsx";
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
                <EnterBillingHeads />
            </SetUpUnitMember>
        </>
    );
}