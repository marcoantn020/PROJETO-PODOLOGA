import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PermissionComponent from '../../PermissionComponent/index.'

import styles from './styles.module.css'

const Menu: React.FC = () => {
    const [openMenuMobile, setMenuMobile] = useState(false);
    return (
        <>
            <section className={styles.Header}>
                <div className={styles.container}>
                    <div className={styles.brand}>
                        <Link to="/dashboard" className={styles.brand}>LOGO</Link>
                    </div>

                    <nav>
                        <ul className={styles.menuDesktop}>
                            <Link to="/dashboard" >Dashboard</Link>

                            <Link to="/patient_register" >paciente</Link>

                            <Link to="/pathology_register" >patologia</Link>

                            <PermissionComponent role="ADMIN">
                                <Link to="/attendance_register" >atendimento</Link>
                            </PermissionComponent>

                            <Link to="/schedule" >agenda</Link>

                            <Link to="#" onClick={() => { localStorage.removeItem('@permission:token') }}>Sair</Link>
                        </ul>
                    </nav>
                </div>

                <div className={styles.toglle} onClick={() => setMenuMobile(!openMenuMobile)}>
                    <i className="fas fa-bars"></i>
                </div>

                {openMenuMobile === true &&
                    <nav>
                        <ul className={styles.menuMobile}>
                            <Link to="/dashboard" >Dashboard</Link>

                            <Link to="/patient_register" >paciente</Link>

                            <Link to="/pathology_register" >patologia</Link>

                            <PermissionComponent role="ADMIN">
                                <Link to="/attendance_register" >atendimento</Link>
                            </PermissionComponent>

                            <Link to="/schedule" >agenda</Link>

                            <Link to="#" onClick={() => { localStorage.removeItem('@permission:token') }}>Sair</Link>
                        </ul>
                    </nav>
                }

            </section>
        </>
    )
}

export default Menu