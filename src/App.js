import "./styles/App.css";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthContext } from "./context/context";

function App() {
    const [isAuth, setIsAuth] = React.useState(true);

    return (
        <AuthContext.Provider value={{
                isAuth,
                setIsAuth
            }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
