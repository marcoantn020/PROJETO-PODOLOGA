import styled from 'styled-components';

export const Overlay = styled.div`
    background: rgba(146, 146, 146, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerModal = styled.div`
    background: white;
    color: black;
    width: 500px!important;
    margin: 0 auto;

    padding: 3rem 2rem;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(0, 0,0, 0.05);
    text-align: center;
    position: relative;
    bottom: 10rem;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`;

export const ContainerModalFull = styled.div`
    background: white;
    color: black;
    width: 70%!important;
    margin: 0 auto;

    padding: 3rem 2rem;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba(0, 0,0, 0.05);
    text-align: center;
    position: relative;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`;

export const ButtonModal = styled.button`
    position: absolute;
    width: 1rem;
    height: 1rem;
    right: 0.9rem;
    top: 0.9rem;
    background: transparent;
    border: 0;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const TitleModal = styled.h4`
    text-align: center;
    margin-bottom:1rem;

    p {
        color: red;
    }
`;

export const BodyModal = styled.div`
    width: 250px!important;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    /* box-shadow: 0 0 2px 1px rgb(39, 34, 34); */
`;

export const BoxModal = styled.div`
    margin: 0 auto;
`;

export const ButtonDel = styled.button`
    padding: 0.2rem 1.2rem;
    font-weight:bold;
    background-color:#e82f2f;
    color: white;
    border: none;
    border-radius:3px;
    cursor: pointer;
`;

export const ButtonCancel = styled.button`
    padding: 0.2rem 1.2rem;
    font-weight:bold;
    background-color:gray;
    color: white;
    border: none;
    border-radius:3px;
    cursor: pointer;
`;
