import { Button, } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, Select, Box } from '../../components/Styled';
import { DataAttendances, DataPatients, IProps } from '../../services/Interfaces';

const PatientPointsData = ({ submitForm, data }: IProps) => {
    const [attendance, setAttendance] = useState<DataAttendances>({} as DataAttendances)
    const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleChange = useCallback((event: any) => {
        setAttendance({
            ...attendance,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [attendance]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!attendance.patient_id || attendance.patient_id === undefined) {
            console.log("Selecione um paciente.")
        }
        submitForm(attendance);
    }


    return (
        <form method="post" onSubmit={handleSubmit}>

            <Box>
                <Select name="patient_id" required onChange={handleChange}>
                    <option value=""> Selecione um paciente </option>
                    {data?.map((patient: DataPatients) => (
                        <option key={patient.id} value={patient.id}> {patient.name} </option>
                    ))}

                </Select>

                <Select name="servicePoints" required onChange={handleChange}>
                    <option value=""> Selecione a pontuação </option>
                    {score.map(points => (
                        <option key={points} value={points}> {points} pontos </option>
                    ))}

                </Select>
            </Box>

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

export default PatientPointsData;