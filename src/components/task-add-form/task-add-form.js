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
        <div className='flex justify-center mt-5 w-full md:h-64 md:w-[45rem] bg-white shadow-lg rounded-lg'>
            <form
                onSubmit={(e) => onSubmit(e)}
                className='flex flex-col justify-around items-center w-5/6'
            >
                <textarea
                    className='resize-none h-56 md:h-full rounded-md w-full mt-3 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none leading-6 text-slate-900 placeholder-slate-400 ring-1 ring-slate-400 shadow-md'
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
                        className='block appearance-none w-full bg-white border-2 border-slate-400 hover:cursor-pointer hover:border-indigo-500 focus:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
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
                <button className='text-md flex self-end group items-center justify-center my-3 px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2'>
                    New
                    <svg
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='ml-[5px]'
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
