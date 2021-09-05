import React from 'react'
import styles from '../styles/Header.module.scss'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from './themeProvider'
import Link from 'next/link'

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <nav className={styles.nav}>
            <p id="logo">
                <Link href="/" passHref={true}>
                    Playground
                </Link>
            </p>

            <ul className="fr">
                <li className={`ml1 ${styles.toggler} show-small-devices`}>
                    <DarkModeSwitch checked={theme == 'dark'} onChange={handleChange} size={28} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
