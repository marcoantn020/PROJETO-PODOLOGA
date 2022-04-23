import { Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '../../components/Styled';
import { DataAttendances, DataPatients } from '../../services/Interfaces';
import Success from '../../components/Success';
import AttendanceData from './AttendanceData';
import ObservationsProfessionalData from './ObservationsProfessionalData';
import PatientPointsData from './PatientPointsData';
import TestMonofilamentData from './TestMonofilamentData';
import ProcedureAccomplishedData from './ProcedureAccomplishedData';
import Menu from '../../components/Menu';
import BoxContainer from '../../components/BoxContainer';
import api from '../../services/api';

const Attendance: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [attendance, setAttendance] = useState<DataAttendances>({} as DataAttendances);
    const [patient, setPatient] = useState<DataPatients[]>([] as DataPatients[])
    const [render, setRender] = useState(true);

    const forms = [
        <PatientPointsData submitForm={collectData} data={patient} />,
        <ObservationsProfessionalData submitForm={collectData} comeBack={prev} />,
        <AttendanceData submitForm={collectData} comeBack={prev} />,
        <TestMonofilamentData submitForm={collectData} comeBack={prev} />,
        <ProcedureAccomplishedData submitForm={collectData} comeBack={prev} />,
        <Success />
    ]
    const handleSubmit = useCallback(async () => {
        await api.post('/attendance', attendance)
            .then(() => console.log("Cadastro realizado com sucesso"))
            .catch(error => console.log(error.message))

    }, [attendance])

    const getPatient = useCallback(async () => {
        if (render === true) {
            await api.get('/patients').then((response) => setPatient(response.data))
            setRender(false);
        }
    }, [render]);

    useEffect(() => {
        if (currentStep === forms.length - 1) {
            handleSubmit();
            setTimeout(reset, 3000);
        }
        getPatient();
    }, [currentStep, forms.length, handleSubmit, getPatient]);

    function reset() {
        setCurrentStep(0);
    }

    function collectData(data: DataAttendances) {
        setAttendance({ ...attendance, ...data });
        next();
    }

    function next() {
        setCurrentStep(currentStep + 1);
    }

    function prev() {
        setCurrentStep(currentStep - 1);
    }

    return (

        <>
            <Menu />
            <BoxContainer>
                <Container>
                    <Stepper className="stepper" activeStep={currentStep} >
                        <Step> <StepLabel> Paciente </StepLabel> </Step>
                        <Step> <StepLabel>Obs. profissionais</StepLabel> </Step>
                        <Step> <StepLabel> Atendimento </StepLabel> </Step>
                        <Step> <StepLabel> Teste mono. </StepLabel> </Step>
                        <Step> <StepLabel> Finalizar</StepLabel> </Step>
                    </Stepper>
                    {forms[currentStep]}
                </Container>
            </BoxContainer>
        </>
    );
}

export default Attendance;