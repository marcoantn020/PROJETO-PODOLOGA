import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, BoxSimple, FormRadio } from '../../components/Styled';
import { DataPathologies, IPropsEditPathology } from '../../services/Interfaces';

const AdditionalInformationDataEdit = ({ submitForm, comeBack, data }: IPropsEditPathology) => {

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

            <FormRadio>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Alergico a Medicamentos</FormLabel>
                    <RadioGroup aria-label="Alergico" name="allergicMedicines" onChange={handleChange}>
                        {(data.allergicMedicines === 'Sim') &&
                            <>
                                <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                                <FormControlLabel value="Não" control={<Radio />} label="Não" />
                            </>
                        }

                    </RadioGroup>
                </FormControl>
            </FormRadio>

            <TextField
                onChange={handleChange}
                defaultValue={data.whatMedicines}
                label="Alergico a qual Medicamento"
                name="whatMedicines"
                variant="outlined"
                margin="normal"
                size="small"
                placeholder="Dipirona"
                fullWidth
            />

            <BoxSimple>
                <h4>Sensibilidade a dor</h4>

                <div>
                    <FormRadio>
                        <FormControl component="fieldset">
                            <FormLabel component="legend"></FormLabel>
                            <RadioGroup aria-label="Alergico" name="allergicMedicines" onChange={handleChange}>
                                <FormControlLabel value="Nenhuma" control={<Radio />} label="Nenhuma" />
                                <FormControlLabel value="Pouca" control={<Radio />} label="Pouca" />
                                <FormControlLabel value="Suportavél" control={<Radio />} label="Suportavél" />
                                <FormControlLabel value="Muita" control={<Radio />} label="Muita" />
                            </RadioGroup>
                        </FormControl>
                    </FormRadio>
                </div>
            </BoxSimple>

            <BoxSimple>
                <h4> Tipo de calçado e meias </h4>
                <div>
                    <TextField
                        onChange={handleChange}
                        label="Tipo de meia que mais usa"
                        name="kindOfSock"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        placeholder="Algodão"
                        required
                    />

                    <TextField
                        onChange={handleChange}
                        label="Calçado que mais usa"
                        name="typeOfFootwear"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        placeholder="Fechado"
                        required
                    />

                    <TextField
                        onChange={handleChange}
                        label="Numero do calçado"
                        name="numberOfShoes"
                        variant="outlined"
                        margin="normal"
                        size="small"
                        placeholder="43"
                        required
                    />
                </div>
            </BoxSimple>

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
                    Cadastrar
                </Button>
            </BoxButton>
        </form>
    );
}

export default AdditionalInformationDataEdit;