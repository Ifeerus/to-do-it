const TaskListSkeleton = () => {
    return (
        <div className='bg-white px-4 py-4 rounded-md mx-2 md:mx-4'>
            <div
                role='status'
                className='flex flex-col md:flex-row justify-between animate-pulse'
            >
                <div>
                    <div className='h-3 bg-gray-200 rounded-full md:w-[330px] mb-2.5'></div>
                    <div className='h-3 bg-gray-200 rounded-full md:w-[300px] mb-2.5'></div>
                    <div className='h-3 bg-gray-200 rounded-full md:w-[360px] mb-5 md:mb-0'></div>
                </div>
                <div className='flex space-x-8 justify-center items-center'>
                    <div className='flex justify-between'>
                        <div className='w-4 h-4 ml-2 bg-gray-200 rounded-full'></div>
                        <div className='w-4 h-4 ml-2 bg-gray-200 rounded-full'></div>
                        <div className='w-4 h-4 ml-2 bg-gray-200 rounded-full'></div>
                    </div>
                    <div className='w-20 h-9 rounded bg-gray-200'></div>
                </div>
                <span className='sr-only'>Loading...</span>
            </div>
        </div>
    );
};

export default TaskListSkeleton;
