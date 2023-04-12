import { useAuthState } from "react-firebase-hooks/auth";

import { useContext } from "react";
import { Context } from "../../index";

const NavBar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <div className='nav h-14 flex flex-row justify-between items-center pl-4 pr-4 rounded-2xl bg-slate-100 shadow-lg text-black bg-primary-light-bg2'>
            <div className='user h-8 flex flex-row justify-between items-center'>
                <img
                    className='h-9 w-9 rounded-full mr-2'
                    src={user.photoURL}
                    alt='User'
                />
                {user.displayName}
            </div>
            <button
                onClick={() => auth.signOut()}
                className='log-out h-8 flex flex-row justify-between items-center hover:bg-slate-200 hover:text-slate-500'
            >
                Log Out
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 ml-1'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                    />
                </svg>
            </button>
        </div>
    );
};

export default NavBar;
