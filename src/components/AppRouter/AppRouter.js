import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "../../router/routes";
import { privateRoutes} from "../../router/routes";
import { AuthContext } from "../../context/context";

function AppRouter() {
    const { isAuth } = useContext(AuthContext);

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
