import { useState } from "react";

const PriorityBtns = ({ priority, taskId, onChangePriority }) => {
    const [activePriority, setActivePriority] = useState(priority);

    const showPriority = (currentPriority) => {
        return activePriority === currentPriority
            ? { "opacity": "1" }
            : { "opacity": "0.3" };
    };

    const newPriority = (currentPriority) => {
        onChangePriority(taskId, currentPriority);

        setActivePriority(currentPriority);
    };

    return (
        <div className='priority flex justify-between'>
            <div
                className='w-4 h-4 ml-2 cursor-pointer rounded-full bg-green-400'
                style={showPriority(3)}
                onClick={() => newPriority(3)}
            ></div>
            <div
                className='w-4 h-4 ml-2 cursor-pointer rounded-full bg-yellow-400'
                style={showPriority(2)}
                onClick={() => newPriority(2)}
            ></div>
            <div
                className='w-4 h-4 ml-2 cursor-pointer rounded-full bg-red-400'
                style={showPriority(1)}
                onClick={() => newPriority(1)}
            ></div>
        </div>
    );
};

export default PriorityBtns;
