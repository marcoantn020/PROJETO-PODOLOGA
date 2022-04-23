import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { BodyModal, ButtonModal, ContainerModal, Overlay, TitleModal, ButtonCancel, ButtonDel } from '../../components/StyledModal';
import api from '../../services/api';

export interface IModalHandles {
    openModal: (testId: number, name: string) => void;
}

const ModalDelete: React.ForwardRefRenderFunction<IModalHandles> = (props, ref) => {
    const [visible, setVisible] = React.useState(false);
    const [id, setId] = useState(Number);
    const [name, setName] = useState(String);

    const deletePatient = useCallback((id: number) => {
        api.delete(`/patients/${id}`)
        setVisible(false);
        console.log(`Usuario excluido com sucesso.`)
    }, []);

    const openModal = useCallback((id, name) => {
        setId(id);
        setName(name);
        setVisible(true);
    }, []);

    useImperativeHandle(ref, () => {
        return {
            openModal
        }
    });

    const handleCloseModal = useCallback(() => {
        setVisible(false);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <>
            <Overlay>
                <ContainerModal>
                    <header>
                        <TitleModal><p>Exluir paciente </p> {name} </TitleModal>
                    </header>
                    <BodyModal>
                        <ButtonCancel onClick={handleCloseModal} type="button"> Cancelar </ButtonCancel>

                        <ButtonDel onClick={() => deletePatient(id)} type="button"> Excluir </ButtonDel>

                        <ButtonModal onClick={handleCloseModal} type="button"> x </ButtonModal>
                    </BodyModal>
                </ContainerModal>
            </Overlay>
        </>
    )
}

export default forwardRef(ModalDelete);