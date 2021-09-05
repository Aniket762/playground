import React from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                Made with <span style={{ color: '#e25555' }}>&hearts;</span> by BetaOverflow
            </div>
        </div>
    )
}

export default Footer
