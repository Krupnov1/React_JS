import { useEffect, useState, useRef } from "react";

export const FormName = ({ onSubmit }) => { 
    const [value, setValue] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text" />
            <input type="submit" />
        </form>
    );
};
