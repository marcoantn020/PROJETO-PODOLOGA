import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    background-color: #60b860;
    color: white;
    padding: 0.7rem 0.5rem;
    width: 100%;
    border-radius: 3px;
`;

const Success: React.FC = () => {

    return (<Title>Cadastro realizado com sucesso!</Title>);
}

export default Success;