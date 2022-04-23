import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

interface RoutesPropsData extends RouteProps {
    role?: string;
}

const AuthRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
    const [permissions, setPermissions] = useState([] as string[])

    useEffect(() => {

        async function loadRoles() {
            const response = api.get('/usuarios/roles')
            const findRole = (await response).data.some((r: string) =>
                role?.split(",").includes(r))
            setPermissions(findRole)
        }
        loadRoles()
    }, [role])

    const { userLogged } = useAuth()

    if (!userLogged()) {
        return <Redirect to="/login" />
    }

    if (!role && userLogged()) {
        return <Route {...rest} />
    }

    return permissions ? (<Route {...rest} />) : <Redirect to="/login" />

}

export default AuthRoutes;