import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { BoxButton, FormRadio } from '../../components/Styled';
import { DataUsers, IProps } from '../../services/Interfaces';


const PersonalActivityData = ({ submitForm, comeBack }: IProps) => {
    const [user, setUser] = useState<DataUsers>({} as DataUsers);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.currentTarget.name]: event.currentTarget.value ? event.currentTarget.value : "Nada informado"
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

                <TextField
                    onChange={handleChange}
                    name="whatActivity"
                    label="Qual atividade"
                    variant="outlined"
                    size="small"
                    placeholder="Sedentario"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    onChange={handleChange}
                    name="profession"
                    size="small"
                    label="Profissão"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
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

export default PersonalActivityData;