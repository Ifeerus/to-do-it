import TaskListItem from "../task-lists-item/task-lists-item";
import TaskListSkeleton from "../task-list-skeleton/task-list-skeleton";

const TaskList = ({
    totalTasks,
    data,
    onDelete,
    onChangePriority,
    onChangeStatus,
}) => {
    const elements = data.map((item) => {
        const { taskId } = item;
        const { ...itemProps } = item;
        return (
            <TaskListItem
                key={taskId}
                // taskId={taskId}
                {...itemProps}
                onDelete={() => onDelete(taskId)}
                onChangePriority={onChangePriority}
                onChangeStatus={onChangeStatus}
            />
        );
    });

    // task={item.task} status={item.status} priority={item.priority} ===== {...item}

    return (
        <div className='mt-5 mx-2 md:mx-0 md:w-[45rem] h-max pb-4 bg-white shadow-lg rounded-lg'>
            <div className='bg-gray-100 w-full px-4 py-4 rounded-t-lg mb-5 flex justify-between'>
                <p className='text-lg font-medium text-gray-900'>All tasks: </p>
                <p className='text-lg font-medium text-gray-900'>
                    {totalTasks}
                </p>
            </div>
            <ul>{data.length !== 0 ? elements : <TaskListSkeleton />}</ul>
        </div>
    );
};

export default TaskList;
