import { BrowserRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "../../../index";

import AppRouter from "../../app-router/app-router";
import Loader from "../../loader/loader";

const App = () => {
    const { auth } = useContext(Context);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <AppRouter user={user} />
        </BrowserRouter>
    );
};

export default App;
