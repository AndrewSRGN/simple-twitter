import {useState} from "react";

export  const useInput = (value) => {
    const [inputValue, setInputValue] = useState(value);

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    return [inputValue, onChange];
}