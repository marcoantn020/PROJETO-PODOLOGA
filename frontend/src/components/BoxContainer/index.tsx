import React from 'react'

import styles from './styles.module.css'

const BoxContainer: React.FC = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default BoxContainer