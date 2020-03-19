import React, { Component } from 'react'

export default function WithHook(props) {

    const [name, setName] = useState("awalone");

    function handleChangeName(e) {
        setName(e.target.value);
    }


    
    return (
        <div>
            <input value={name} onChange={handleChangeName} />
        </div>
    )
    
}
