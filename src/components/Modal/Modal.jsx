import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ children, visible, setVisible }) => {

    const styleClasses = ["modal"];

    if (visible) {
        styleClasses.push("modal--active");
    }

    const handleClinkOutside = (e) => {
        if (e.target === e.currentTarget) {
            setVisible(false);
        }
    };

    return (
        <div className={styleClasses.join(" ")} onClick={handleClinkOutside}>
            <div className="modal__content">{children}</div>
        </div>
    );
};

export default Modal;
