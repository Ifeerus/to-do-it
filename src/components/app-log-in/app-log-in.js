import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Context } from "../../index";
import logo from "../services/img/logo-black.png";

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
        <section className='flex flex-col justify-center antialiased bg-gray-200 text-gray-600 min-h-screen p-4'>
            <div className='h-full'>
                <div className='max-w-[360px] mx-auto'>
                    <div className='bg-white shadow-lg rounded-lg mt-9'>
                        <header className='text-center px-5 pb-5'>
                            <img
                                className='inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-lg border-4 border-black box-content shadow mb-3'
                                src={logo}
                                alt=''
                            />

                            <h3 className='text-xl font-bold text-gray-900 mb-1'>
                                I want ToDoIt...
                            </h3>
                            <div className='text-sm font-medium text-gray-500'>
                                your best task manager
                            </div>
                        </header>
                        <div className='bg-gray-100 text-center px-5 py-6 rounded-b-lg'>
                            <div className='text-sm mb-6'>
                                <strong className='font-semibold'>
                                    Log In
                                </strong>{" "}
                                with your google account
                            </div>
                            <button
                                type='button'
                                onClick={login}
                                className='font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2'
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
            </div>
        </section>
    );
};

export default AppLogIn;
