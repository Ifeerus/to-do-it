import { useAuthState } from "react-firebase-hooks/auth";

import { useContext } from "react";
import { Context } from "../../index";

const NavBar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <div className='nav mt-4 h-14 flex flex-row justify-between items-center pl-4 pr-4 bg-white shadow-lg rounded-lg text-gray-900 '>
            <div className='user h-8 flex flex-row justify-between items-center'>
                <img
                    className='w-9 h-9 fill-current rounded-full border-4 border-white box-content shadow mr-2'
                    src={user.photoURL}
                    alt='User'
                />
                {user.displayName}
            </div>
            <button
                onClick={() => auth.signOut()}
                className='text-sm flex items-center justify-center h-9 px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2'
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
