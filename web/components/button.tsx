import React from 'react'
import styles from '../styles/Button.module.css';

interface Props {
    handleClick ?: () => {};
    darkText: boolean;
}

const Btn: React.FC<Props> = ({children, handleClick, darkText}) => {
    return (
        darkText ?
            <button className={`${styles.success} ${styles.btn} ${styles.dark_text}`} onClick={handleClick}>
                {children}
            </button>
        :
            <button className={`${styles.success} ${styles.btn} ${styles.light_text}`} onClick={handleClick}>
                {children}
            </button>
    )
}

export default Btn
