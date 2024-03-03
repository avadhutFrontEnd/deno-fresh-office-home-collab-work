import { useState } from "preact/hooks";

function Counter() {
    let number = 0;
    const [ numberState , setNumberState] = useState(0);
    function handleClick(e) {
        e.stopPropagation();
        number++;
        setNumberState((prevNumber:number) => prevNumber + 1);
        console.log(number);
    }

    return (
        <div class=" flex flex-col justify-between items-center space-y-3">
            <h1 class=" w-full h-10 border-2 border-solid border-black bg-white items-center text-center">{numberState}</h1>
            <button onClick={handleClick} icon="fa-solid fa-cart-shopping"  type="button" class="  text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                <i class="fa-solid fa-cart-shopping mx-2"></i>
                Buy Product
            </button>
        </div>
    );
}

export default Counter;