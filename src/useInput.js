import React, { useState } from 'react';

const useInput = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => setValue(e.target.value);

    const clear = () => {};

    return {
        value,
        handleChange,
    };
};
