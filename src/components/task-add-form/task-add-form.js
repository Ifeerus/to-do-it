import { useState } from "react";

const TaskAddForm = ({ onAddItem }) => {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState(0);
    const [status] = useState("toDo");

    const onValueChange = (eventTarget) => {
        if (eventTarget.name === "task-msg") {
            setTask(eventTarget.value);
        }
        if (eventTarget.name === "priority") {
            setPriority(eventTarget.value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        onAddItem(task, status, +priority);
        setTask("");
        setPriority(0);
    };

    return (
        <div className='flex justify-center mt-5 h-64 w-[45rem] rounded-2xl bg-slate-100 shadow-lg text-black bg-primary-light-bg2'>
            <form
                onSubmit={(e) => onSubmit(e)}
                className='flex flex-col justify-around items-center w-5/6'
            >
                <textarea
                    className='resize-none h-full rounded-md w-full mt-3 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none leading-6 text-slate-900 placeholder-slate-400 ring-1 ring-slate-200 shadow-sm'
                    placeholder='I want to do...'
                    onChange={(e) => onValueChange(e.target)}
                    name='task-msg'
                    value={task}
                    required
                ></textarea>
                <div className='inline-block relative self-end mt-3'>
                    <select
                        name='priority'
                        value={priority}
                        onChange={(e) => onValueChange(e.target)}
                        required
                        className='block appearance-none w-full bg-white border border-slate-200 hover:cursor-pointer hover:border-blue-500 tab px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                    >
                        <option value=''>None</option>
                        <option value='3' className='text-green-600'>
                            Low
                        </option>
                        <option value='2' className='text-yellow-400'>
                            Medium
                        </option>
                        <option value='1' className='text-red-600'>
                            High
                        </option>
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
                <button className='hover:bg-blue-400 self-end group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium my-3 pl-2 pr-3 py-2 shadow-sm'>
                    New
                    <svg
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='ml-2'
                        aria-hidden='true'
                    >
                        <path d='M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z' />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default TaskAddForm;
