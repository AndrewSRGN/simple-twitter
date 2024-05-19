import React, {useState} from 'react';
import classes from './Error.module.css';

const Error = ({error}) => {
    const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);

    const handleButtonClick = (e) => {
        setIsMoreInfoVisible(!isMoreInfoVisible);
    }

    return (
        <div className={classes.error}>
            Sorry, there was an error!
            <button onClick={handleButtonClick}
                    className={classes.button}>
                More Info
            </button>
            {isMoreInfoVisible &&
                <p className={classes.error_info}>
                    {error}
                </p>
            }
        </div>
    );
};

export default Error;