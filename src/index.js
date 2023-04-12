import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/services/app/App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOVN8hCVRbafXQZUevSIdW21WAJkJxdPk",
    authDomain: "to-do-it-df54f.firebaseapp.com",
    projectId: "to-do-it-df54f",
    storageBucket: "to-do-it-df54f.appspot.com",
    messagingSenderId: "113582633250",
    appId: "1:113582633250:web:d2f29fd2cd58582313757b",
    measurementId: "G-5B28ZV5ZKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                app,
                auth,
                firestore,
            }}
        >
            <App />
        </Context.Provider>
    </React.StrictMode>
);
