import React from 'react'
import { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@mui/material/Button';

const Input = ({setInputValue}) => {
    const [value, setValue] = useState("");
    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }
    return (
        <div className='inputContainer'> 
            <h1> URL Shortener</h1>
            <div>
                <input 
                type="text" 
                placeholder='Enter messy link'
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <Button variant="contained" onClick={handleClick}>
                    Shorten</Button>
            </div>
        </div>
    )
}

export default Input