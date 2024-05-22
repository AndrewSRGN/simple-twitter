import React from "react";

import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "../../router/routes";
import { privateRoutes} from "../../router/routes";

function AppRouter() {
    const [isAuth, setIsAuth] = React.useState(true);

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
