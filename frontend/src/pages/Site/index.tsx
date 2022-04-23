
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './site.module.css'

const Site: React.FC = () => {
    const boxAttendance = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.brand}>
                    <Link to="/"> Logo</Link>
                </div>
                <div className={styles.ul}>
                    <ul>
                        {/* <li><Link to="atendimento">Atendimentos</Link></li>
                        <li><Link to="sobre">sobre</Link></li> */}
                    </ul>
                </div>
            </nav>

            <div className={styles.container}>

                <section className={styles.banner}>
                    <div className={styles.boxBanner}>
                        <div className={styles.photo}></div>
                        <h3>nome do profissional</h3>
                        <p> Desenvolvedora JS com background multidisciplinar. Sempre aprendendo para ensinar e vice-versa.Desenvolvedora JS com background multidisciplinar. Sempre aprendendo para ensinar e vice-versa.</p>
                    </div>
                </section>{/* banner */}

                <section id="atendimento" className={styles.attendance}>
                    <h3>Atendimentos</h3>
                    <div className={styles.containerAttendance}>
                        {
                            boxAttendance.map((key, infos) => {
                                return (
                                    <div key={key} className={styles.boxAttendance}>
                                        <div className={styles.line}>
                                            <div className={styles.imgAttendance}></div>
                                            <h4>Unha encravada</h4>

                                            <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                <section id="sobre" className={styles.about}>
                    <h3>sobre</h3>
                    <div className={styles.boxAbout}>
                        <p>sobre a profissal uma descrição um pouco mais detalhada, sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada, sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada sobre a profissal uma descrição um pouco mais detalhada</p>
                    </div>
                </section>

                <section className={styles.something}>

                </section>

                <footer className={styles.footer}>
                    <div className={styles.location}>
                        <h5>nome da rua - bairro - Marilia</h5>
                        <p>atendimento 9h as 11:30 e 13h as 17h</p>
                    </div>

                    <div className={styles.socialMedia}>
                        <div className={styles.facebook}>face</div>
                        <div className={styles.instagram}>insta</div>
                        <div className={styles.linkdin}>link </div>
                    </div>

                    <div className={styles.info}>
                        <h5>Entre em contado</h5>
                        <p>cel/whatsapp 77 9999-9999</p>
                    </div>
                </footer>

                <p>&copy; Marco Antonio - 2021 </p>

            </div>
        </>
    )
}

export default Site