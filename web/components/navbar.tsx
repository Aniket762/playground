import React from 'react'
import styles from '../styles/Header.module.css'
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
                <Link href="/" passHref={true} >
                    Playground
                </Link>
            </p>
            
            <ul className="fr">
<<<<<<< HEAD
                <li className="ml1 hide-small-devices">
                    <Link href="#">snapper</Link>
                </li>
                <li className="ml1 hide-small-devices">
                    <Link href="#coditor">coditor</Link>
                </li>
                <li className="ml1 hide-small-devices">
                    <Link href="/questionsPage">get involved</Link>
                </li>
=======
>>>>>>> 1fcd59b0bc572269e7b740f5a825e675568812fd
                <li style={{ width: '50px' }} className="ml1"></li>
                <li className={`ml1 ${styles.toggler} show-small-devices`}>
                    <DarkModeSwitch checked={theme == 'dark'} onChange={handleChange} size={28} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
