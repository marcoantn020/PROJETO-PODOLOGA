import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width:1024px;
    padding: 0 2rem 1rem 2rem;
    background-color:white;
    color:black;
    
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px black;

    @media screen and (max-width: 1124px) {
        width: 90%;
    } 
    
    @media screen and (max-width: 700px) {
        width: 90%;
        .stepper {
            display:flex;
            justify-content:flex-start;
            flex-direction: column;
            align-items:flex-start;
        }
     }

     @media screen and (max-width: 500px) {
        width: 90%;
     }
`;

export const ContainerSmall = styled.section`
    width: 100%;
    max-width:700px;
    padding: 0 2rem 1rem 2rem;
    background-color:white;
    color:black;
    
    margin: 0 auto;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px black;

    @media screen and (max-width: 860px) {
        width: 90%;
    } 
    
    @media screen and (max-width: 700px) {
        width: 80%;
        .stepper {
            display:flex;
            justify-content:flex-start;
            flex-direction: column;
            align-items:flex-start;
        }
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content:space-between;
`;

export const FormRadio = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    padding: 0.5rem;

    div {
        display:flex;
        flex-direction:row;
    }
`;

export const BoxButton = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;

    .buttonColor {
        background-color: darkgray;
        color: white;
        margin-right: 10px;
    }

    .buttonColor:hover{
        background-color: darkgray;
        opacity: 0.9;
    }
`;

export const BoxRadio = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    margin-top:2rem;

    h4 {
        text-align: center;
        color:gray;
        font-size: 1.1.rem;
        font-weight: normal;
    }
`;


export const TextArea = styled.textarea`
    width:98%;
    height: 100px;
    padding-left:1rem;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    resize:none;
`;

export const Select = styled.select`
    margin-top:1rem;
    width: 40%;
    height:1.5rem;
    border-radius: 3px;
    background-color:white;

    option {}
`;

export const ContainerCheckBox = styled.div`
    margin-top:1rem;
    display:flex;
    justify-content: space-around;
    flex-direction:row;

    div {
        display:flex;
        flex-direction:column;
    }
`;

export const BoxSimple = styled.div`
    margin-top:1rem;
    display:flex;
    flex-direction:column;

    h4 {
        text-align: start;
        color:gray;
        font-weight: normal;
        font-size:1.1rem;
    }

    div {
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
    }
    
    @media screen and (max-width: 700px) {

        h4 {
            text-align:start;
        }

        div {
            display:flex;
            justify-content:flex-start;
            flex-direction: column;
            align-items:flex-start;
        }
    }
`;


export const TitleGeneric = styled.h3`
    text-align: center;
    color:gray;
    font-weight:normal;
`;

export const ButtonLastAttendance = styled.button`
    background-color: #50647e;
    border: none;
    border-radius: 2px;
    color:white;
    padding: 0.2rem 0.7rem;
    cursor: pointer;
`;