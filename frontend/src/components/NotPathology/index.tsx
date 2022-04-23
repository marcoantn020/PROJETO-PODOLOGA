import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    background-color:#ebb147;
    color: white;
    padding: 0.7rem 0.5rem;
    width: 100%;
    border-radius: 3px;
`;

const NotPathology: React.FC = () => {

    return (<Title>Paciente sem patologia registrada.</Title>);
}

export default NotPathology;