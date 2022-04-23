import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { BoxButton, FormRadio, TextArea, BoxRadio, Select } from '../../components/Styled';
import api from '../../services/api';
import { DataPathologies, DataPatients, IPropsEditPathology } from '../../services/Interfaces';

const DiabetesDataEdit = ({ submitForm, data }: IPropsEditPathology) => {
    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);
    const [patient, setPatient] = useState<DataPatients>({} as DataPatients);
    const [render, setRender] = useState(true);


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

    useEffect(() => {
        if (data.patient_id !== undefined && render === true) {
            api.get(`/patients/${data.patient_id}`).then((response) => setPatient(response.data))
            setRender(false);
        }
    }, [data.patient_id, render]);

    return (
        <form method="post" onSubmit={handleSubmit}>
            <Select name="patient_id" onChange={handleChange} required>

                <option key={patient.id} defaultValue={data.patient_id}> {(patient.id === data.patient_id) && patient.name} </option>

            </Select>

            <BoxRadio>
                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Diabetes</FormLabel>
                        <RadioGroup aria-label="Diabetes" name="diabetes" onChange={handleChange}>
                            {(data.diabetes === 'Sim') &&
                                <>
                                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                                </>
                            }
                        </RadioGroup>
                    </FormControl>
                </FormRadio>

                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Histórico na Familia</FormLabel>
                        <RadioGroup aria-label="Histórico" name="historicalDiabetes" onChange={handleChange}>
                            {(data.historicalDiabetes === 'Sim') &&
                                <>
                                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                                </>
                            }

                        </RadioGroup>
                    </FormControl>
                </FormRadio>
            </BoxRadio>

            <TextArea
                defaultValue={data.diabetesObservations}
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

export default DiabetesDataEdit;