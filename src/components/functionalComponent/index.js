import React, { useState } from 'react';

const FunctionalComponent = () => {

    const [ourStateValue, setOurStateValue] = useState({
        value: "I am the initial state for the functional component"
    });

    const updateState = (event) => {
        setOurStateValue({ value: event.target.value });
    }

    return (
        <>
            <h2>I am a functional component.</h2>

            <input
                type="text"
                value={ourStateValue.value}
                onChange={updateState}
            />

            <p>{ourStateValue.value}</p>
        </>
    )

}

export default FunctionalComponent;
