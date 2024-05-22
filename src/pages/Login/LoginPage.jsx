import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
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