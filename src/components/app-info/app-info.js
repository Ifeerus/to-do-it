import logo from "../services/img/logo-no-background.png";

const AppInfo = () => {
    return (
        <div className='flex items-center justify-center app-info w-64 h-64 p-6 mt-5 rounded-2xl bg-slate-100 shadow-lg text-black bg-primary-light-bg2'>
            <img className='w-40 h-40' src={logo} alt='' />
        </div>
    );
};

export default AppInfo;
