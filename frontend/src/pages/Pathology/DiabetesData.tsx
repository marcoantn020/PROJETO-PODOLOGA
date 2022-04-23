import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, FormRadio, TextArea, BoxRadio, Select } from '../../components/Styled';
import { DataPathologies, DataPatients, IProps } from '../../services/Interfaces';

const DiabetesData = ({ submitForm, data }: IProps) => {
    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);

    const handleChange = useCallback((event: any) => {
        setPathology({
            ...pathology,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [pathology]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!pathology.patient_id || pathology.patient_id === undefined) {
            console.log("informe um paciente.")
            return;
        }
        if (pathology.diabetesObservations === undefined) {
            console.log("Informe uma observação mesmo que curta.");
            return;
        }
        submitForm(pathology);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <Select name="patient_id" onChange={handleChange} required>

                <option value=""> Selecione um paciente </option>

                {data?.map((patient: DataPatients) => (
                    <option key={patient.id} value={patient.id}> {patient.name} </option>
                ))}

            </Select>

            <BoxRadio>

                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Diabetes</FormLabel>
                        <RadioGroup aria-label="Diabetes" name="diabetes" onChange={handleChange}>
                            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="Não" control={<Radio required />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </FormRadio>

                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Histórico na Familia</FormLabel>
                        <RadioGroup aria-label="Histórico" name="historicalDiabetes" onChange={handleChange}>
                            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="Não" control={<Radio required />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </FormRadio>
            </BoxRadio>

            <TextArea
                required
                onChange={handleChange}
                name="diabetesObservations"
                placeholder="Observações" />


            <BoxButton>
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

export default DiabetesData;