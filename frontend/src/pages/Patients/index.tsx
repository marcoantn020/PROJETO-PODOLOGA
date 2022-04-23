import React, { useCallback, useEffect, useState } from 'react';
import ContactData from './ContactData';
import PersonalData from './PersonalData';
import AddressData from './AddressData';
import PersonalActivityData from './PersonalActivityData';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import { Container } from '../../components/Styled';
import Success from '../../components/Success';
import { ValidateName } from '../../services/RegistrationRules';
import { DataPatients } from '../../services/Interfaces';
import Menu from '../../components/Menu';
import BoxContainer from '../../components/BoxContainer';
import api from '../../services/api';

const Patients: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(Number);
  const [patient, setPatient] = useState<DataPatients>({} as DataPatients);


  const forms = [
    <PersonalData submitForm={collectData} validations={{ name: ValidateName }} />,
    < ContactData submitForm={collectData} comeBack={prev} />,
    <AddressData submitForm={collectData} comeBack={prev} />,
    <PersonalActivityData submitForm={collectData} />,
    <Success />
  ]

  const handleSubmit = useCallback(async () => {
    await api.post('/patients', patient)
      .then(() => console.log("Cadstro realizado"))
      .catch(console.log)

  }, [patient])

  const reset = useCallback(() => {
    setCurrentStep(0);
  }, []);

  useEffect(() => {
    if (currentStep === forms.length - 1) {
      handleSubmit();
      setTimeout(reset, 3000);
    }
  }, [currentStep, forms.length, handleSubmit, reset]);



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

export default Patients;