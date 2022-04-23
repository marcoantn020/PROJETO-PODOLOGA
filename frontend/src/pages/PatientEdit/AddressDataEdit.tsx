import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { DataUsers, IPropsEditPatients } from '../../services/Interfaces';
import { BoxButton } from '../../components/Styled';
import Input from '../../components/Input';


const AddressDataEdit = ({ submitForm, comeBack, data }: IPropsEditPatients) => {
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
                    name="zipCode"
                    defaultValue={data.zipCode}
                    label="CEP"
                />

                <Input
                    onChange={handleChange}
                    name="address"
                    defaultValue={data.address}
                    label="Endereço"
                />

                <Input
                    onChange={handleChange}
                    name="number"
                    defaultValue={data.number}
                    label="Numero"
                />

                <Input
                    onChange={handleChange}
                    name="district"
                    defaultValue={data.district}
                    label="Bairro"
                />

                <Input
                    onChange={handleChange}
                    name="city"
                    defaultValue={data.city}
                    label="Cidade"
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

export default AddressDataEdit;