import logo from "../services/img/logo-black.png";

const AppInfo = () => {
    return (
        <div className='flex flex-col items-center justify-between pt-3 app-info w-64 h-64 mt-5 bg-white shadow-lg rounded-lg'>
            <img
                className='w-32 h-32 border-4 border-black rounded-lg'
                src={logo}
                alt='logo'
            />
            <div className='bg-gray-100 text-center w-full h-24 rounded-b-lg pt-3 pb-3'>
                <h3 className='text-lg font-bold text-gray-900 mb-1'>
                    Plan your life with
                </h3>
                <div className='text-sm font-medium text-gray-500'>
                    your best task manager
                </div>
            </div>
        </div>
    );
};

export default AppInfo;
