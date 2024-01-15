import SocietyHomePage from "../index.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import EnterMember from "../../../islands/societyHomePage/enter-member.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            <SocietyHomePage>
                <EnterMember />
            </SocietyHomePage>
        </>
    );
}