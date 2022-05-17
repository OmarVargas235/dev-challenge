import { useState } from 'react';

export const useTheme = (state=false) => {

    const [darkMode, setDarkMode] = useState(state);

    const toggleTheme = () => setDarkMode(!darkMode);
    
    return { darkMode, toggleTheme };
}