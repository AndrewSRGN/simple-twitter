import React from 'react';
import classes from './Loader.module.css';

const Loader = ({center}) => {
    return (
        <div className={`${classes.loader} ${center && classes.center}`}></div>
    );
};

export default Loader;