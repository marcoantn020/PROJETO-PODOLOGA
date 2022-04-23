import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, BoxRadio, TitleGeneric } from '../../components/Styled';
import { DataAttendances, IProps } from '../../services/Interfaces';

const TestMonofilamentData = ({ submitForm, comeBack }: IProps) => {

    const [attendance, setAttendance] = useState<DataAttendances>({} as DataAttendances);

    const handleChange = useCallback((event: any) => {
        setAttendance({
            ...attendance,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [attendance]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(attendance);
    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <TitleGeneric>Teste de monofilamento</TitleGeneric>
            <BoxRadio>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Pé Esquerdo</FormLabel>
                    <RadioGroup aria-label="Diabetes" name="monofilamentTestLeftFoot" onChange={handleChange}>
                        <FormControlLabel value="Com sensibilidade" control={<Radio />} label="Com sensibilidade" />
                        <FormControlLabel value="Sem sensibilidade" control={<Radio required />} label="Sem sensibilidade" />
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Pé Direito</FormLabel>
                    <RadioGroup aria-label="Diabetes" name="monofilamentTestRightFoot" onChange={handleChange}>
                        <FormControlLabel value="Com sensibilidade" control={<Radio />} label="Com sensibilidade" />
                        <FormControlLabel value="Sem sensibilidade" control={<Radio required />} label="Sem sensibilidade" />
                    </RadioGroup>
                </FormControl>
            </BoxRadio>


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

export default TestMonofilamentData;