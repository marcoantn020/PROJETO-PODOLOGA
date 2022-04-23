import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { TextField, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { BoxButton, FormRadio } from '../../components/Styled';
import { DataUsers, IProps } from '../../services/Interfaces';


const PersonalData = ({ submitForm, validations }: IProps) => {
    const [user, setUser] = useState<DataUsers>({} as DataUsers);
    const [error, setError] = useState({ name: { validate: true, message: "" } });

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [user]);

    function handleBlur(event: any) {
        const { name, value } = event.target;
        const isValidate = validations[name](value);
        const newErrors = { ...error, name: isValidate };
        setError(newErrors);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(user);
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    name="recommendation"
                    label="Indicação"
                    variant="outlined"
                    size="small"
                    placeholder="<Opcional>"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!error.name.validate}
                    helperText={error.name.message}
                    name="name"
                    label="Nome Completo"
                    variant="outlined"
                    size="small"
                    placeholder="Nome completo"
                    margin="normal"
                    fullWidth
                    required
                />

                <div>
                    <span style={{ color: "gray" }}>Data de Aniversario</span>
                    <TextField
                        onChange={handleChange}
                        name="birthDate"
                        id="date"
                        size="small"
                        type="date"
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
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

export default PersonalData;