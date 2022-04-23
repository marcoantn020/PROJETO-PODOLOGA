import { Button, TextField, } from '@material-ui/core';
import { FormEvent, useCallback, useState } from 'react';
import { BoxButton, BoxSimple } from '../../components/Styled';
import { DataAttendances, IProps } from '../../services/Interfaces';

const AttendanceData = ({ submitForm, comeBack }: IProps) => {

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


            <BoxSimple>
                <h4> Digito pressão </h4>
                <div>
                    <TextField
                        onChange={handleChange}
                        label="Pé Esquerdo"
                        name="digitPressureLeftFoot"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />

                    <TextField
                        onChange={handleChange}
                        label="Pé Direito"
                        name="digitPressureRightFoot"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                </div>
            </BoxSimple>

            <BoxSimple>
                <h4> Patologias dermatólogicas </h4>
                <div>
                    <TextField
                        onChange={handleChange}
                        label="Pé Esquerdo"
                        name="pathologyDermatologyLeftFoot"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />

                    <TextField
                        onChange={handleChange}
                        label="Pé Direito"
                        name="pathologyDermatologyRightFoot"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                </div>
            </BoxSimple>
            <BoxSimple>
                <h4> Patologias ungueais presentes </h4>
                <div>
                    <TextField
                        onChange={handleChange}
                        label="Pé Esquerdo"
                        name="pathologyNailsPresentLeftFoot"
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />

                    <TextField
                        onChange={handleChange}
                        label="Pé Direito"
                        name="pathologyNailsPresentRightFoot"
                        variant="outlined"
                        margin="normal"
                        size="small"
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
                    proximo
                </Button>
            </BoxButton>
        </form>
    );
}

export default AttendanceData;