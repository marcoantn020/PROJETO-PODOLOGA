import React, { useCallback, useEffect, useState } from 'react';
import BoxContainer from '../../components/BoxContainer';
import Menu from '../../components/Menu';
import { Container } from '../../components/Styled';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { DataPatients, IIdParams } from '../../services/Interfaces';
import AddressDataEdit from './AddressDataEdit';
import ContactDataEdit from './ContactDataEdit';
import PersonalActivityDataEdit from './PersonalActivityDataEdit';
import PersonalDataEdit from './PersonalDataEdit';
import Update from '../../components/Update';
import { useParams } from 'react-router-dom';
import api from '../../services/api';



const PatientEdit: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [patient, setPatient] = useState<DataPatients>({} as DataPatients);
    const [data, setData] = useState<DataPatients>({} as DataPatients);
    const [render, setRender] = useState(true);
    const params: IIdParams = useParams();


    const forms = [
        <PersonalDataEdit submitForm={collectData} data={data} />,
        <ContactDataEdit submitForm={collectData} comeBack={prev} data={data} />,
        <AddressDataEdit submitForm={collectData} comeBack={prev} data={data} />,
        <PersonalActivityDataEdit submitForm={collectData} data={data} />,
        <Update />
    ]

    const getPatient = useCallback(async () => {
        if (render === true && (params.id !== null || params.id !== undefined)) {
            await api.get(`/patients/${Number(params.id)}`).then(res => setData(res.data))
            setRender(false);
        }
    }, [params.id, render]);

    const handleSubmit = useCallback(async () => {
        await api.put(`/patients/${params.id}`, patient)
            .then(() => console.log("cadastro atualizado."))
            .catch(console.log)

    }, [params.id, patient])


    useEffect(() => {
        getPatient();
        if (currentStep === forms.length - 1) {
            handleSubmit();
            setTimeout(reset, 3000);
        }

    }, [handleSubmit, currentStep, forms.length, getPatient]);

    function reset() {
        setCurrentStep(0);
    }


    function collectData(data: DataPatients) {
        setPatient({ ...patient, ...data });
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
                        <Step> <StepLabel>Dados pessoais</StepLabel> </Step>
                        <Step> <StepLabel>Contato</StepLabel> </Step>
                        <Step> <StepLabel>Endereço</StepLabel> </Step>
                        <Step> <StepLabel>Atividades</StepLabel> </Step>
                    </Stepper>
                    {forms[currentStep]}
                </Container>
            </BoxContainer>

        </>
    );
}

export default PatientEdit;