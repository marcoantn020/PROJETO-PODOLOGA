import React, { useCallback, useEffect, useState } from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import Menu from '../../components/Menu';
import { Container } from '../../components/Styled';
import Update from '../../components/Update';
import { DataPathologies, IIdParams } from '../../services/Interfaces';
import AdditionalInformationDataEdit from './AdditionalInformationDataEdit';
import DiabetesDataEdit from './DiabetesDataEdit';
import HypertensionDataEdit from './HypertensionDataEdit';
import MedicinesDataEdit from './MedicinesDataEdit';
import PreAnalyzeEdit from './PreAnalyzeEdit';
import { useParams } from 'react-router';
import api from '../../services/api';
import NotPathology from '../../components/NotPathology';

const PathologyEdit: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(Number);
    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);
    const [data, setData] = useState<DataPathologies>({} as DataPathologies);
    const [render, setRender] = useState(true);
    const params: IIdParams = useParams();

    const forms = [
        <DiabetesDataEdit submitForm={collectData} data={data} />,
        <HypertensionDataEdit submitForm={collectData} comeBack={prev} data={data} />,
        <MedicinesDataEdit submitForm={collectData} comeBack={prev} data={data} />,
        <PreAnalyzeEdit submitForm={collectData} comeBack={prev} data={data} />,
        <AdditionalInformationDataEdit submitForm={collectData} comeBack={prev} data={data} />,
        <Update />
    ]

    const getPathology = useCallback(async () => {
        if (render === true && (params.id !== undefined || params.id !== null)) {
            await api.get(`/patient/${Number(params.id)}/pathology`).then(res => setData(res.data))
            setRender(false);
        }
    }, [params.id, render]);

    const handleSubmit = useCallback(async () => {
        await api.put(`/patient/${Number(params.id)}/pathology`, pathology)
            .then(() => console.log("Cadastro atualizado."))
            .catch(() => console.log("Algo deu errado!"))
    }, [pathology, params.id])

    useEffect(() => {
        getPathology();
        if (data === null || !data || data === undefined) {
            return console.log("paciente sem patologia registrada")
        } else {
            if (currentStep === forms.length - 1) {
                handleSubmit();
                setTimeout(reset, 3000);
            }
        }
    }, [getPathology, currentStep, forms.length, data, handleSubmit]);

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
                    {data ? forms[currentStep] : <NotPathology />}
                </Container>
            </BoxContainer>
        </>
    );
}

export default PathologyEdit;