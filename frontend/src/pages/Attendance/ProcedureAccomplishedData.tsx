import { Button } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, TextArea, TitleGeneric } from '../../components/Styled';
import { DataAttendances, IProps } from '../../services/Interfaces';

const ProcedureAccomplishedData = ({ submitForm, comeBack }: IProps) => {

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
            <TitleGeneric>Procedimento realizado</TitleGeneric>
            <TextArea
                required
                onChange={handleChange}
                name="procedureAccomplished"
                placeholder="Detalhes do procedimento" />


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
                    Finalizar
                </Button>
            </BoxButton>
        </form>
    );
}

export default ProcedureAccomplishedData;