import React, { createContext } from 'react';
import useData from './useData';
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const allContext = useData()
    return (
        <ThemeContext.Provider value={allContext}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;