import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { DataUsers, IProps } from '../../services/Interfaces';
import { BoxButton } from '../../components/Styled';


const ContactData = ({ submitForm, comeBack }: IProps) => {
    const [user, setUser] = useState<DataUsers>({} as DataUsers);
    // const [errors, setErrors] = useState({ name: { validate: true, message: "" } });

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
                <TextField
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    placeholder="email@email.com"
                    margin="normal"
                    fullWidth
                    required
                />

                <TextField
                    onChange={handleChange}
                    name="cell"
                    label="Celular/WhatsApp"
                    variant="outlined"
                    size="small"
                    placeholder="14 9 9999-9999"
                    margin="normal"
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
                        proximo
                </Button>
                </BoxButton>
            </form>
        </>

    );
}

export default ContactData;