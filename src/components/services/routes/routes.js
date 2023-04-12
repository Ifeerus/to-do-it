import AppLogIn from "../../app-log-in/app-log-in";
import AppMainPage from "../../app-main-page/app-main-page";

import { LOGIN_ROUTE } from "../utils/consts";
import { TASKS_ROUTE } from "../utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <AppLogIn />,
    },
];

export const privateRoutes = [
    {
        path: TASKS_ROUTE,
        Component: <AppMainPage />,
    },
];
