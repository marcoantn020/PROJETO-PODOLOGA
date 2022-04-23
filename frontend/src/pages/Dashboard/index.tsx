
import React from 'react'
import Menu from '../../components/Menu'
import PatientHome from './PatientHome'
import TasksHome from './TasksHome'

import styles from './dashboard.module.css'

const Dashboard: React.FC = () => {

    return (
        <>
            <Menu />
            <section className={styles.containerHome}>
                <PatientHome />

                <TasksHome />
            </section>
        </>
    )
}

export default Dashboard