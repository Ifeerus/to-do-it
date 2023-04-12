import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Context } from "../../index";
import logo from "../services/img/logo-no-background.png";

const AppLogIn = () => {
    const { auth, firestore } = useContext(Context);
    const [users] = useCollectionData(collection(firestore, "users"));

    // console.log(users);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                const sendUserData = async (data) => {
                    await setDoc(doc(firestore, "users", user.uid), {
                        uid: user.uid,
                        displayName: user.displayName,
                        userphotoURL: user.photoURL,
                        tasks: [...data],
                    });
                };

                const findUserId = users.find((item) => item.uid === user.uid);
                return findUserId === undefined ? sendUserData([]) : user;
            })
            .catch((error) => {
                const errorCode = error.code;
                return errorCode;
            });
    };

    return (
        <div className='h-[600px] w-auto flex justify-center items-center'>
            <div className='bg-slate-200 w-[40rem] h-[25rem] flex flex-col justify-around items-center rounded-xl'>
                <img className='w-40 h-40' src={logo} alt='' />
                <div className=' h-28  bg-white rounded-xl flex flex-col justify-between items-center'>
                    <p className='ml-4 mr-4 mt-4 text-left text-2xl tracking-wide'>
                        Enter to your Account:
                    </p>
                    <button
                        type='button'
                        className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-4'
                        onClick={login}
                    >
                        <svg
                            className='w-4 h-4 mr-2 -ml-1'
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fab'
                            data-icon='google'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 488 512'
                        >
                            <path
                                fill='currentColor'
                                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                            ></path>
                        </svg>
                        Log In With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppLogIn;
