import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { DataUsers, IPropsEditPatients } from '../../services/Interfaces';
import { BoxButton } from '../../components/Styled';
import Input from '../../components/Input';


const ContactDataEdit = ({ submitForm, comeBack, data }: IPropsEditPatients) => {
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

                <Input
                    onChange={handleChange}
                    name="email"
                    defaultValue={data.email}
                    label="Email"
                />

                <Input
                    onChange={handleChange}
                    name="cell"
                    defaultValue={data.cell}
                    label="Celular/WhatsApp"
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

export default ContactDataEdit;