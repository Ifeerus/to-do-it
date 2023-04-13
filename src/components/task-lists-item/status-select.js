import { useState } from "react";

const StatusSelect = ({ taskId, status, onChangeStatus }) => {
    const [activeStatus, setActiveStatus] = useState(status);

    const changeActiveStatus = (e) => {
        const newStatus = e.target.value;

        onChangeStatus(taskId, newStatus);
        setActiveStatus(e.target.newStatus);
    };

    return (
        <div className='inline-block relative w-42'>
            <select
                value={activeStatus}
                onChange={changeActiveStatus}
                required
                className='block appearance-none w-full bg-white border-2 border-slate-400 hover:cursor-pointer hover:border-indigo-500 focus:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            >
                <option value='toDo'>To Do</option>
                <option value='doing'>Doing</option>
                <option value='done'>Done</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                    className='fill-current h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
            </div>
        </div>
    );
};

export default StatusSelect;
