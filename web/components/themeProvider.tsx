import {createContext, useEffect, useState, useContext} from 'react';
import palette from '../utils/palette';

type ThemeName = "light" | "dark";

type ThemeContextType = {
    theme: ThemeName;
    setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>(undefined!);

type Props = {
    children : React.ReactNode;
}

export const ThemeProvider = ({children}: Props)  => {
    const [theme, setTheme] = useState<ThemeName>("light");

    useEffect(() => {
        const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(darkOS ? "dark" : "light");
    }, [])

    const toggleTheme = (name: ThemeName) => {
        const root = document.documentElement;
        root.style.setProperty(
            "--text-primary",
            palette[name].tp
        )
        root.style.setProperty(
            "--bg-1",
            palette[name].bg_1
        )
        root.style.setProperty(
            "--text-secondary",
            palette[name].ts
        )
        
        root.style.setProperty(
            "--bg-3",
            palette[name].bg_3
        )

        document.getElementById('selector')?.classList.toggle('invert');

        setTheme(name);
    }

    return (
        <ThemeContext.Provider
            value={{theme, setTheme  :toggleTheme}}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);
