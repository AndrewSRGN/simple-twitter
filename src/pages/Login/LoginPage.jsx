import React, { useContext } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { AuthContext } from "../../context/context";

const LoginPage = () => {
    const { setIsAuth } = useContext(AuthContext);

    const login = (event) => {
        let rand = function() {
            return Math.random().toString(36).substr(2);
        };

        let token = function() {
            return rand() + rand();
        };

        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', token());
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Login"/>
                <Input type="password" placeholder="Password"/>
                <Button>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;