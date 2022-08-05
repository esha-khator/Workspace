import React from 'react'
import { useState } from 'react';

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
                <button onClick={handleClick}>
                    Shorten</button>
            </div>
        </div>
    )
}

export default Input