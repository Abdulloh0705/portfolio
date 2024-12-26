import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [value, setValue] = useState('');
    return (
        <Context.Provider value={{ value, setValue }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
