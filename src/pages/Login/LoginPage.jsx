import React, { useContext } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { AuthContext } from "../../context/context";

const LoginPage = () => {
    const { setIsAuth } = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
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