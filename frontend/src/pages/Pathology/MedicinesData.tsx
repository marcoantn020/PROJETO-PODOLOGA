import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, BoxRadio, FormRadio, TextArea } from '../../components/Styled';
import { DataPathologies, IProps } from '../../services/Interfaces';

const MedicinesData = ({ submitForm, comeBack }: IProps) => {

    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);

    const handleChange = useCallback((event: any) => {
        setPathology({
            ...pathology,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [pathology]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (pathology.medicinesObservations === undefined) {
            console.log("Informe uma observação mesmo que curta.");
            return;
        }
        submitForm(pathology);
    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <BoxRadio>
                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Medicamentos Controlados</FormLabel>
                        <RadioGroup aria-label="Medicamentos" name="medicines" onChange={handleChange}>
                            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="Não" control={<Radio required />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </FormRadio>

                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Histórico na Familia</FormLabel>
                        <RadioGroup aria-label="Histórico" name="historicalMedicines" onChange={handleChange}>
                            <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                            <FormControlLabel value="Não" control={<Radio required />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </FormRadio>
            </BoxRadio>

            <TextArea
                required
                onChange={handleChange}
                name="medicinesObservations"
                placeholder="Observações" />

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

export default MedicinesData;