import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "../../router/routes";
import { privateRoutes} from "../../router/routes";
import { AuthContext } from "../../context/context";
import Loader from "../Loader/Loader";

function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader /> ;
    }

    return (
        isAuth ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            )}
        </Routes>
    );
}

export default AppRouter;
