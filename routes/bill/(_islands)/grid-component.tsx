import { useState } from "preact/hooks";

const data = {
    Monthly: {
        outerLoop: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        innerLoop: [1]
    },
    Quaterly: {
        outerLoop: [1, 2, 3, 4],
        innerLoop: [1, 2, 3]
    },
    semi_Annualy: {
        outerLoop: [1, 2],
        innerLoop: [1, 2, 3, 4, 5, 6]
    },
    Annualy: {
        outerLoop: [1],
        innerLoop: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
};

const GridComponent = () => {
    const [selectedCycle, setSelectedCycle] = useState("Monthly"); // Initial selected cycle

    const handleCycleChange = (e) => {
        setSelectedCycle(e.target.value);

    };

    return (
        <div className="h-full flex flex-col space-y-2">
            {/* Select element for cycle selection */}
            <select id="default" value={selectedCycle} onChange={handleCycleChange} name="cycle" class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {Object.keys(data).map((cycleName) => (
                    <option key={cycleName} value={cycleName}>
                        {cycleName}
                    </option>
                ))}
            </select>
            <div class={selectedCycle == "Monthly" ? "h-5/6 mb-2 grid grid-cols-3 gap-y-2 " : "h-5/6 mb-2 flex flex-col space-y-2"}>
                {/* Dynamically render the grid based on selected cycle */}
                {data[selectedCycle] && ( // Ensure data exists before rendering
                    <>
                        {data[selectedCycle].outerLoop.map((outerIteration) => (
                            <div key={outerIteration} className={selectedCycle == "Monthly" ? "h-fit w-fit bg-red-100 p-2 " : "h-fit w-fit bg-red-100 border-2 border-black rounded-md p-2 grid grid-cols-3 gap-2"}>
                                {/* {console.log(outerIteration)} */}
                                {data[selectedCycle].innerLoop.map((innerIteration) => (
                                    <div className="h-20 bg-blue-400 ">
                                        {/* Calender */}
                                        <svg class="h-20 w-20 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" /></svg>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </>
                )}
            </div>

        </div>
    );
};

export default GridComponent;
