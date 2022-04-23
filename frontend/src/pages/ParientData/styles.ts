import styled from 'styled-components';

export const BoxPatient = styled.section`
    width: 70%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    padding: 0.3rem 1rem;
    background-color: white;
    color: black;
    border-radius: 3px;
    border-top: 1px solid black;
    border-left:1px solid black;
    border-right:1px solid black;

    div { 
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        margin-bottom:1rem;
    }

    table {
    border-collapse: collapse;
    margin-bottom: 1rem;
    }

    table td {
        border: 1px solid black;
        padding: 0.5rem 0.3rem;
    }
    td > p > strong {
        text-transform:capitalize;
    }
`;

export const BoxPathology = styled.section`
width: 70%;
   margin: 0 auto;
   display:flex;
   flex-direction:column;
   padding: 0 1rem;
   background-color: white;
   color: black;
   border-radius: 3px;
    border-left:1px solid black;
    border-right:1px solid black;

   div { 
       display:flex;
       flex-direction:column;
       justify-content: center;
       align-items:center;
       margin-bottom:1rem;
   }

   table {
   border-collapse: collapse;
   margin-bottom: 1rem;
   }

   table td {
       border: 1px solid black;
       padding: 0.6rem 0.3rem;
   }

   .tdObservation {
       padding: 1rem 0.3rem;
   }
   .tdObservation > p {width:70%; margin: 0 auto; text-align: justify; }
   .tdObservation > strong {display:flex; justify-content:center; margin-bottom: 0.5rem; }
   td > p > strong {
       text-transform:capitalize;
   }
`;

export const BoxPreAnalyze = styled.section`
    width: 70%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    padding: 0 1rem;
    background-color: white;
    color: black; border-radius: 3px;
    border-left:1px solid black;
    border-right:1px solid black;
    border-bottom: 1px solid black;

    div { 
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        margin-bottom:1rem;
    }

    table {
    border-collapse: collapse;
    margin-bottom: 1rem;
    }

    table td {
        border: 1px solid black;
        padding: 0.6rem 0.3rem;
    }

    table td > p {
        text-transform: capitalize;
    }

    .tdObservation {
        display:flex;
        padding: 1rem 0.3rem;
    }
    .tdObservation > p {width:70%; margin: 0 auto; }
    .tdObservation > p > span {text-align:center}
    .tdObservation > strong {display:flex; justify-content:center; margin-bottom: 0.5rem; }
    td > p  {
        margin-bottom: 0.3rem;
    }
    td > p > strong {
        text-transform:capitalize;
    }
`;

export const BodyModalCustom = styled.div`

    table {
        border-collapse: collapse;
    }

    table td {
        border: 1px solid black;
        padding: 0.6rem 0.3rem;
    }
    td > p {
        overflow-y: auto;
        height:100px;
        text-indent: 10px;
        text-align: justify;
        width:80%;
        margin:0 auto;
    }

    .textAlign {
        text-align:center;
    }
`;

export const NotFound = styled.h2`
    background-color:orange;
    color:white;
`;

export const TitleModalCustom = styled.h4`
    text-align: center;
    margin-bottom:1rem;

    p {
        font-weight:normal;
    }
`;