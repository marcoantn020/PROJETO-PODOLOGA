import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, BoxRadio, FormRadio, TextArea } from '../../components/Styled';
import { DataPathologies, IPropsEditPathology } from '../../services/Interfaces';

const HypertensionDataEdit = ({ submitForm, comeBack, data }: IPropsEditPathology) => {

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
            <BoxRadio>
                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Hipertensão</FormLabel>
                        <RadioGroup aria-label="Hipertensão" name="hypertension" onChange={handleChange}>
                            {(data.hypertension === 'Sim') &&
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
                        <RadioGroup aria-label="Histórico" name="historicalHypertension" onChange={handleChange}>
                            {(data.historicalHypertension === 'Sim') &&
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
                defaultValue={data.hypertensionObservations}
                required
                onChange={handleChange}
                name="hypertensionObservations"
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

export default HypertensionDataEdit;