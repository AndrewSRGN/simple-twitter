import React from 'react';
import Button from "../components/UI/Button/Button";
import {useNavigate} from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate('/login')}>
                Create User
            </Button>
        </div>
    );
};

export default AboutPage;