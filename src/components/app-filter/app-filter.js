import { useState } from "react";

const AppFilter = ({
    statusFilter,
    priorityFilter,
    onStatusFilterSelect,
    onPriorityFilterSelect,
}) => {
    const [activeStatus, setActiveStatus] = useState(statusFilter);
    const [activePriority, setActivePriority] = useState(priorityFilter);

    const showAllData = [{ name: "all", label: "Show All Tasks" }];

    const showAllBtn = showAllData.map(({ name, label }) => {
        const active = activePriority === name && activeStatus === name;
        const clazz = active ? "filter-btn-active" : "filter-btn";
        return (
            <button
                type='button'
                key={name}
                onClick={() => {
                    setActiveStatus(name);
                    setActivePriority(name);
                    onStatusFilterSelect(name);
                    onPriorityFilterSelect(name);
                }}
                className={`text-md w-full h-8 mb-3 ${clazz}`}
            >
                {label}
            </button>
        );
    });

    const statusBtnsData = [
        { name: "toDo", label: "To Do" },
        { name: "doing", label: "Doing" },
        { name: "done", label: "Done" },
    ];

    const statusBtns = statusBtnsData.map(({ name, label }) => {
        const active = activeStatus === name;
        const clazz = active ? "filter-btn-active" : "filter-btn";
        return (
            <button
                type='button'
                key={name}
                onClick={() => {
                    setActiveStatus(name);
                    onStatusFilterSelect(name);
                }}
                className={`text-md w-1/3 h-8 ${clazz}`}
            >
                {label}
            </button>
        );
    });

    const priorityBtnsData = [
        { name: 3, label: "Low priority" },
        { name: 2, label: "Medium priority" },
        { name: 1, label: "High priority" },
    ];

    const prioityBtns = priorityBtnsData.map(({ name, label }) => {
        const active = activePriority === name;
        const clazz = active ? "filter-btn-active" : "filter-btn";
        return (
            <button
                type='button'
                key={name}
                onClick={() => {
                    setActivePriority(name);
                    onPriorityFilterSelect(name);
                }}
                className={`text-md w-full h-8 mb-2 ${clazz}`}
            >
                {label}
            </button>
        );
    });

    return (
        <div className='md:sticky md:top-5 mx-2 md:mx-0 md:w-64 md:h-60 py-5 my-5 flex flex-col items-center justify-around bg-white shadow-lg rounded-lg'>
            <div className='w-5/6 mb-3'>
                {showAllBtn}
                <div className='flex w-full'>{statusBtns}</div>
            </div>
            <div className='priority w-5/6 flex flex-col justify-between'>
                {prioityBtns}
            </div>
        </div>
    );
};

export default AppFilter;
