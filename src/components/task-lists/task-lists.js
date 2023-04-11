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
        <div className='mt-5 w-[45rem] h-max py-4 px-4 rounded-2xl bg-slate-100 shadow-lg text-black bg-primary-light-bg2'>
            <div className='bg-white px-4 py-4 rounded-md mb-5 flex justify-between'>
                <p className='inline'>All tasks: </p>
                <p className='inline'>{totalTasks}</p>
            </div>
            <ul>{data.length !== 0 ? elements : <TaskListSkeleton />}</ul>
        </div>
    );
};

export default TaskList;
