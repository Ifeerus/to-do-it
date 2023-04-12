import { Routes, Route, Navigate } from "react-router-dom";

import { privateRoutes } from "../services/routes/routes";
import { publicRoutes } from "../services/routes/routes";

import { TASKS_ROUTE, LOGIN_ROUTE } from "../services/utils/consts";

const AppRouter = ({ user }) => {
    return user ? (
        <Routes>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
            ))}
            <Route path='*' element={<Navigate replace to={TASKS_ROUTE} />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} />
            ))}
            <Route path='*' element={<Navigate replace to={LOGIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
