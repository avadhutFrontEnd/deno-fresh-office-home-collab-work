import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";


interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);
    return (
        <>
         <div class=" w-full h-full flex ">
            {/* Sidebar  */}
            <div  class=" w-2/6 bg-slate-800 flex-shrink-0 h-full overflow-auto">
              Hello 
            </div>
            {/* Main */}
            <div>
                <h2>Lorem ipsum dolor sit amet.`</h2>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil laudantium natus neque nisi! Facilis qui natus voluptatem debitis? Deserunt.
        
            </div>
        </div>   
        </>
    );
}
