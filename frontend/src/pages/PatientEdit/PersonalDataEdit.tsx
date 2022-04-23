import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { BoxButton, FormRadio } from '../../components/Styled';
import { DataPatients, IPropsEditPatients } from '../../services/Interfaces';
import Input from '../../components/Input';


const PersonalDataEdit = ({ submitForm, data }: IPropsEditPatients) => {
    const [user, setUser] = useState<DataPatients>({} as DataPatients);
    const { recommendation, name, birthDate } = data


    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [user]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(user);
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <Input
                    onChange={handleChange}
                    name="recommendation"
                    defaultValue={recommendation ? recommendation : "Sem indicação"}
                    label="Indicação"
                />

                <Input
                    onChange={handleChange}
                    name="name"
                    defaultValue={name}
                    label="Nome Completo"
                />

                <Input
                    onChange={handleChange}
                    type="date"
                    name="birthDate"
                    defaultValue={birthDate}
                    label="Data de Aniversario"
                />

                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Genero</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" onChange={handleChange}>
                            <FormControlLabel value="Feminino" control={<Radio required />} label="Feminino" />
                            <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                        </RadioGroup>
                    </FormControl>
                </FormRadio>

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
        </>

    );
}

export default PersonalDataEdit;