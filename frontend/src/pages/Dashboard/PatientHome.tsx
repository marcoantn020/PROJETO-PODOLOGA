import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BodyModal, ButtonCancel, ButtonDel, ButtonModal, ContainerModal, Overlay, TitleModal } from '../../components/StyledModal'
import api from '../../services/api'
import { DataPatients } from '../../services/Interfaces'

import styles from './dashboard.module.css'


const PatientHome: React.FC = () => {
    const [patients, setPatients] = useState<DataPatients[]>([] as DataPatients[]);
    const [idDelete, setIdDelete] = useState(Number);
    const [name, setName] = useState(String);
    const [visible, setVisible] = useState(false);


    const showPatients = useCallback(async () => {
        await api.get('/patients')
            .then((response) => setPatients(response.data))
            .catch(console.log)
    }, [])

    const destroy = useCallback(async (id: any) => {
        await api.delete(`/patients/${id}`)
            .then(() => console.log(`Paciente de id ${id} deletado.`))
            .catch(console.log)
        showPatients();
        setVisible(false);
    }, [showPatients]);

    useEffect(() => {
        showPatients();
    }, [showPatients])

    return (
        <>
            <div className={styles.containerHome__patient}>
                {(visible === true) && deletePatient(idDelete, name)}
                <div>
                    <h4>Lista de pacientes</h4>
                </div>

                <ul className={styles.containerListPatient}>

                    {
                        patients.map(patient => (
                            <li key={patient.id}>

                                <Link to={`/patient_data/${patient.id}`}>
                                    {patient.name} ID: {patient.id}
                                </Link>

                                <div className={styles.containerHome__patientButtons}>

                                    <Link to={`/pathology/${patient.id}`}>
                                        <i className="fas fa-shoe-prints"></i>
                                    </Link>

                                    <Link to={`/patient/${patient.id}`}>
                                        <i className="fas fa-user-edit"></i>
                                    </Link>

                                    <button onClick={() => {
                                        setIdDelete(patient.id);
                                        setName(patient.name);
                                        setVisible(true)
                                    }}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )

    function deletePatient(id: number, name: string) {
        return (
            <Overlay>
                <ContainerModal>
                    <header>
                        <TitleModal><p>Exluir paciente </p> {name} ID: {id} </TitleModal>
                    </header>
                    <BodyModal>
                        <ButtonCancel onClick={() => setVisible(false)} type="button"> Cancelar </ButtonCancel>

                        <ButtonDel onClick={() => destroy(id)} type="button"> Excluir </ButtonDel>

                        <ButtonModal onClick={() => setVisible(false)} type="button"> x </ButtonModal>
                    </BodyModal>
                </ContainerModal>
            </Overlay>
        );
    }

}

export default PatientHome