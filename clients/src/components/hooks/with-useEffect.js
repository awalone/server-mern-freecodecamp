import React, { useState, useEffect } from 'react'

export default function WithUseEffect(props) {

    const [name, setName] = useState("awalone");

    useEffect(() => {
        // pengganti componentDidMount
        document.title = name;
    });

    function handleChangeName(e) {
        setName(e.target.value);
    }

    return(
        <div>
            <input
                value={name}
                onChange={handleChangeName} />
        </div>
    )


}
