import PriorityBtns from "./prioity-btns";
import StatusSelect from "./status-select";

const TaskListItem = ({
    taskId,
    task,
    status,
    priority,
    onDelete,
    onChangePriority,
    onChangeStatus,
}) => {
    const doneTaskStyle = () => {
        return status === "done" ? "line-through" : "none";
    };

    return (
        <li className='bg-white border border-indigo-500 px-4 py-4 rounded-md mt-5 flex flex-col md:flex-row justify-between mx-4'>
            <span
                className='text-lg align-middle overflow-auto h-28 scr md:h-auto md:max-w-[25rem] mb-3'
                style={{ textDecoration: doneTaskStyle() }}
            >
                {task}
            </span>
            <form className='flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-8 justify-center items-end md:items-center'>
                <PriorityBtns
                    taskId={taskId}
                    priority={priority}
                    onChangePriority={onChangePriority}
                />
                <StatusSelect
                    taskId={taskId}
                    status={status}
                    onChangeStatus={onChangeStatus}
                />
                <button type='button' onClick={onDelete}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5 cursor-pointer text-red-600 hover:text-red-800'
                    >
                        <path
                            fillRule='evenodd'
                            d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>
            </form>
        </li>
    );
};

export default TaskListItem;
