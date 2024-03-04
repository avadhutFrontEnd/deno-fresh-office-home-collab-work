import GenerateBill from "./(_islands)/generate-bill.tsx";
// import SetUpUnitMember from "../setUpUnitMember.tsx";
import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
// import AppLayout from "../../../../templates/layout/AppLayout.tsx";
import FlowBitSidebar from "./(_islands)/flowBitSidebar.tsx";
import ReactCode from "./(_islands)/Reactcode.tsx";
import Props from "./(_islands)/Props.tsx";
import { asset } from "$fresh/runtime.ts";

interface ChildrenProps {
    children: ComponentChildren;
}

export default function newVideoEdit(props: ChildrenProps) {
    const count = useSignal(0);

    // console.log(logInfo('This is an informational message'));

    const itemsArray = [
        {
            title: "Nike Air MX Super 2500 - Red",
            Price: 449,
            discount: 39,
            img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Premium Comfortable Regular Wear Walking Shoes For Men  (Black)",
            Price: 700,
            discount: 50,
            img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Loafers For Men  (White, Black)",
            Price: 430,
            discount: 10,
            img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/e/l/n/9-axe-white-9-hotstyle-white-black-original-imagthgrx7pfzjmd.jpeg?q=70&crop=false"
        },
        {
            title: "Alpha Predator Sneakers For Men  (Black)",
            Price: 900,
            discount: 20,
            img: "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/q/j/y/7-rkt-1205-7-atom-black-original-imagvktumrbwkuhz.jpeg?q=70&crop=false"
        },
    ]

    return (
        <>
            {/* <AppLayout> */}
            {/* {props.children} */}
            {/* <GenerateBill /> */}
            {/* </AppLayout> */}
            <div class="flex flex-col h-screen w-screen ">
                <div class="flex-1 flex flex-col border-10 border-solid bg-red-200 mb-10 overflow-x-hidden ">
                    <FlowBitSidebar />
                    {/* <ReactCode /> */}

{/* Level 1 */}
                    {/* <div class=" grid grid-cols-2">
                       <Props />  
                       <Props /> 
                       <Props /> 
                       <Props /> 
                    </div> */}
{/* Level 2 */}
                    {/* <div class=" grid grid-cols-2">
                        <Props title={itemsArray[0].title}  Price={itemsArray[0].Price} discount={itemsArray[0].discount} img={itemsArray[0].img} />
                        <Props  title={itemsArray[1].title}  Price={itemsArray[1].Price} discount={itemsArray[1].discount} img={itemsArray[1].img}  />
                        <Props   title={itemsArray[2].title}  Price={itemsArray[2].Price} discount={itemsArray[2].discount} img={itemsArray[2].img}  />
                        <Props   title={itemsArray[3].title}  Price={itemsArray[3].Price} discount={itemsArray[3].discount} img={itemsArray[3].img}  />
                    </div> */}

 {/* Level 3 */}
                    {/* <div className="grid grid-cols-2">
                        {itemsArray.map((item, index) => (
                            <Props
                                key={index}
                                title={item.title}
                                Price={item.Price}
                                discount={item.discount}
                                img={item.img}
                            />
                        ))}
                    </div> */}
                    
                </div>
                <div class="w-full flex flex-row justify-center items-center border-t-2 border-solid border-gray-400  h-10 fixed bottom-0 left-0 z-40 ">
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://chintan.in/" class="hover:underline">SCAI chintan's product™</a>. All Rights Reserved.</span>
                </div>
            </div>
        </>
    );
}