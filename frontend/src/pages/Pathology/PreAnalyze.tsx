import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, ContainerCheckBox } from '../../components/Styled';
import { DataPathologies, IProps } from '../../services/Interfaces';

const PreAnalyze = ({ submitForm, comeBack }: IProps) => {

    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);

    const handleChange = useCallback((event: any) => {
        setPathology({
            ...pathology,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [pathology]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(pathology);
    }
    return (
        <form method="post" onSubmit={handleSubmit}>

            <ContainerCheckBox>
                <div>
                    <p> Sobre o Paciente </p>

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatient_cancer" />}
                        label="Cancer"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatient_pacemaker" />}
                        label="Marca Passo"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatient_pins" />}
                        label="Pinos"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatient_cardiopathy" />}
                        label="Cardiopatia"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatient_footSurgery" />}
                        label="Cirurgia nos pés"
                    />
                </div>

                <div>
                    <p> Sobre o Pé do Paciente </p>

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientFoot_callus" />}
                        label="Calo"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientFoot_callosity" />}
                        label="Calosidade"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientFoot_fissure" />}
                        label="Fissura"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientFoot_dryness" />}
                        label="Ressecamento"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientFoot_psoriasis" />}
                        label="Psóriase"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientFoot_pantarWart" />}
                        label="Verruga Pantar"
                    />
                </div>

                <div>
                    <p> Sobre a Unha Paciente </p>

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientNail_onychocriptosis" />}
                        label="Onicocriptose"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientNail_onycholysis" />}
                        label="Onicólise"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientNail_onychomycosis" />}
                        label="Onicomicose"
                    />

                    <FormControlLabel
                        control={<Checkbox
                            onChange={handleChange}
                            value="sim"
                            name="aboutThePatientNail_onychophoresis" />}
                        label="Onicofose"
                    />

                </div>

            </ContainerCheckBox>

            <BoxButton>
                <Button
                    className="buttonColor"
                    onClick={comeBack}
                    type="button"
                    variant="contained"
                    size="small">
                    voltar
                    </Button>

                <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    color="primary">
                    proximo
                </Button>
            </BoxButton>
        </form>
    );
}

export default PreAnalyze;