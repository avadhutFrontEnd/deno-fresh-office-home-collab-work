
import Unit from "./index.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import EnterUnit from "../../../islands/societyHomePage/enter-unit.tsx";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
            <Unit>
                <EnterUnit></EnterUnit>
            </Unit>
        </>
    );
}