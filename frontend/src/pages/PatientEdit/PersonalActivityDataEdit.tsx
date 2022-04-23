import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { BoxButton, FormRadio } from '../../components/Styled';
import { DataUsers, IPropsEditPatients } from '../../services/Interfaces';
import Input from '../../components/Input';


const PersonalActivityDataEdit = ({ submitForm, comeBack, data }: IPropsEditPatients) => {
    const [user, setUser] = useState<DataUsers>({} as DataUsers);

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

                <FormRadio>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Pratica atividade fisica</FormLabel>
                        <RadioGroup aria-label="gender" name="practiceActivity" onChange={handleChange}>
                            <FormControlLabel value="1" control={<Radio />} label="Sim" />
                            <FormControlLabel value="0" control={<Radio />} label="Não" />
                        </RadioGroup>
                    </FormControl>
                </FormRadio>


                <Input
                    onChange={handleChange}
                    name="whatActivity"
                    defaultValue={data.whatActivity}
                    label="Qual atividade"
                />

                <Input
                    onChange={handleChange}
                    name="profession"
                    defaultValue={data.profession}
                    label="Profissão"
                />

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
        </>

    );
}

export default PersonalActivityDataEdit;