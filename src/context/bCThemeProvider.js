import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../utils/darkTheme";
import { lightTheme } from "../utils/lightTheme";

const BCThemeProvider = ({ children, darkMode }) => {

    const theme = darkMode ? darkTheme : lightTheme;

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

    return !mounted
    ? <div style={{ visibility: "hidden" }}>{body}</div>
    : body;
};

export default BCThemeProvider;