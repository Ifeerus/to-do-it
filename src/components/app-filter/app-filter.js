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
                className={`text-sm w-full h-8 mb-3 ${clazz}`}
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
                className={`text-sm w-1/3 h-8 ${clazz}`}
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
                className={`text-sm w-full h-8 mb-2 ${clazz}`}
            >
                {label}
            </button>
            // <div className='mb-2 flex items-center hover:text-red-400'>
            //     <div className='w-4 h-4 mr-3 cursor-pointer bg-red-400 rounded-full'></div>
            //     <span className='cursor-pointer text-red-400'>{label}</span>
            // </div>
        );
    });

    return (
        <div className='sticky top-5 w-64 h-64 py-5 mt-5 flex flex-col items-center justify-around rounded-2xl bg-slate-100 shadow-lg text-black bg-primary-light-bg2'>
            <div className='w-5/6 mb-3'>
                <p className='text-left text-3xl font-medium tracking-wide'>
                    Filter
                </p>
            </div>

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
