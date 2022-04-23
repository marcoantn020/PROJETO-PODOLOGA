import React, { useCallback, useEffect, useState } from 'react';
import { StepLabel, Stepper, Step } from '@material-ui/core';
import { Container } from '../../components/Styled';
import DiabetesData from './DiabetesData';
import { DataPathologies, DataPatients } from '../../services/Interfaces';
import HypertensionData from './HypertensionData';
import MedicinesData from './MedicinesData';
import PreAnalyze from './PreAnalyze';
import AdditionalInformationData from './AdditionalInformationData';
import Success from '../../components/Success';
import Menu from '../../components/Menu';
import BoxContainer from '../../components/BoxContainer';
import api from '../../services/api';

const Pathology: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);
    const [patient, setPatient] = useState<DataPatients[]>([] as DataPatients[]);
    const [render, setRender] = useState(true);

    const forms = [
        <DiabetesData submitForm={collectData} data={patient} />,
        <HypertensionData submitForm={collectData} comeBack={prev} />,
        <MedicinesData submitForm={collectData} comeBack={prev} />,
        <PreAnalyze submitForm={collectData} comeBack={prev} />,
        <AdditionalInformationData submitForm={collectData} comeBack={prev} />,
        <Success />
    ]

    const handleSubmit = useCallback(async () => {
        await api.post('/pathologies', pathology)
            .then(() => console.log("Cadastro feito."))
            .catch(() => console.log("Este paciente já tem uma patologia cadastrada."))
    }, [pathology])

    const getPatients = useCallback(async () => {
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
        getPatients();
    }, [currentStep, forms.length, handleSubmit, getPatients]);

    function reset() {
        setCurrentStep(0);
    }


    function collectData(data: DataPathologies) {
        setPathology({ ...pathology, ...data });
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
                        <Step> <StepLabel>Diabetes</StepLabel> </Step>
                        <Step> <StepLabel>Hipertensão</StepLabel> </Step>
                        <Step> <StepLabel>Medicamentos Con.</StepLabel> </Step>
                        <Step> <StepLabel>Pré Analise</StepLabel> </Step>
                        <Step> <StepLabel>Info. adicionais</StepLabel> </Step>
                    </Stepper>
                    {forms[currentStep]}
                </Container>
            </BoxContainer>
        </>
    );
}

export default Pathology;