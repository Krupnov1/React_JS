import { useEffect, useState, useRef } from "react";
import './Form.style.css';
import { Button, FormControl, InputLabel, FormHelperText, Input} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const Form = ( {onSubmit} ) => {
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
            <FormControl className="formName">
                <InputLabel htmlFor="my-input">Message</InputLabel>
                <Input id="my-input" value={value} onChange={handleChange} aria-describedby="my-helper-text" inputRef={inputRef}/>
                <FormHelperText id="my-helper-text">Please enter your message.</FormHelperText>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
            </FormControl>
        </form> 
    );
};