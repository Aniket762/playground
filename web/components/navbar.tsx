import React from 'react'
import styles from '../styles/Header.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <a><p id='logo'>Playground</p></a>
            <ul className="fr">
                <li className="ml1"><a href="#">snapper</a></li>
                <li className="ml1"><a href="#">coditor</a></li>
                <li className="ml1"><a href="#">get involved</a></li>
                <li className="ml1">Toggler</li>
            </ul>
        </nav>
    )
}

export default Navbar
