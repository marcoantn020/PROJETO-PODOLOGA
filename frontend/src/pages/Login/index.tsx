import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './login.module.css'

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const { signIn } = useAuth()

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault()

        await signIn({ username, password })
        history.push('/dashboard')

    }, [username, password, history, signIn])

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <h2>Login</h2>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Usuario" />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            placeholder="Senha" />
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit">Entrar</button>
                        <button onClick={() => history.push('/')}>Acessar o site </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login