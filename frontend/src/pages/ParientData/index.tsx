import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BoxContainer from '../../components/BoxContainer';
import Menu from '../../components/Menu';
import { ButtonLastAttendance } from '../../components/Styled';
import { BodyModalCustom, BoxPathology, BoxPatient, BoxPreAnalyze, NotFound, TitleModalCustom } from './styles';
import api from '../../services/api';
import { DataAttendances, DataPathologies, DataPatients, IIdParams } from '../../services/Interfaces';
import { ButtonModal, ContainerModalFull, Overlay } from '../../components/StyledModal';


const PatientData: React.FC = () => {
    const params: IIdParams = useParams();
    const [patient, setPatient] = useState<DataPatients>({} as DataPatients);
    const [pathology, setPathology] = useState<DataPathologies>({} as DataPathologies);
    const [attendance, setAttendance] = useState<DataAttendances>({} as DataAttendances);
    const [render, setRender] = useState(true);
    const [visible, setVisible] = useState(false);

    const getData = useCallback(async () => {
        if (render === true && (params.id !== null || params.id !== undefined)) {
            await api.get(`/patients/${Number(params.id)}`)
                .then((response) => setPatient(response.data))
                .catch(() => console.log("Algo deu errado no servidor."));

            await api.get(`/patient/${Number(params.id)}/pathology`)
                .then((response) => setPathology(response.data))
                .catch(() => console.log("Algo deu errado no servidor."));
            setRender(false);

            await api.get(`/patient/${Number(params.id)}/attendance`)
                .then((response) => setAttendance(response.data))
                .catch(() => console.log("Algo deu errado no servidor."));
            setRender(false);
        }
    }, [render, params.id]);

    useEffect(() => {
        getData();
    }, [getData])

    return (
        <>
            {(visible === true) && lastAttendance()}
            <Menu />
            <BoxContainer>
                <BoxPatient>
                    <div>
                        <h3>Ficha do Paciente</h3>
                        <strong>Indicado por</strong>
                        <p>{patient.recommendation ? patient.recommendation : "N??o informado"}</p>
                        <br />
                        <ButtonLastAttendance onClick={() => setVisible(!visible)} >Ultimo atendimento</ButtonLastAttendance>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={2}> <p><strong>nome :</strong> <span>{patient.name}</span> </p></td>
                                <td colSpan={1}> <p> <strong>Data de nascomento :</strong> {patient.birthDate} </p></td>
                                <td colSpan={1}><p><strong>genero :</strong> {patient.gender} </p></td>
                            </tr>
                            <tr>
                                <td colSpan={2}> <p><strong>email :</strong> {patient.email} </p></td>
                                <td><p><strong>Celular/WhatsApp :</strong> {patient.cell} </p></td>
                                <td><p><strong>Profiss??o :</strong> {patient.profession} </p></td>
                            </tr>
                            <tr>
                                <td> <p><strong>cep :</strong> {patient.zipCode} </p></td>
                                <td colSpan={2}> <p><strong>Endere??o :</strong> {patient.address} </p></td>
                                <td> <p><strong>numero :</strong> {patient.number} </p> </td>
                            </tr>
                            <tr>
                                <td><p><strong>bairro :</strong> {patient.district} </p></td>
                                <td colSpan={3}><p><strong>Cidade :</strong> {patient.district} </p></td>
                            </tr>
                            <tr>
                                <td><p><strong>Pratica Atividade Fisica :</strong> {(patient.practiceActivity === '0') ? "Sim" : "N??o"} </p></td>
                                <td colSpan={3}> <p><strong>qual Atividade Fisica :</strong> {patient.whatActivity} </p></td>
                            </tr>
                        </tbody>
                    </table>
                </BoxPatient>

                <BoxPathology>
                    <div><h3>Patologias</h3> </div>
                    <table>
                        <tbody>
                            <tr>
                                <td><p><strong>diabetes :</strong> {pathology.diabetes}</p></td>
                                <td> <p><strong>historico na familia :</strong> {pathology.historicalDiabetes} </p> </td>
                            </tr>
                            <tr>
                                <td className="tdObservation" colSpan={2}>
                                    <strong>Observa????es</strong>
                                    <p > <span>{pathology.diabetesObservations}</span> </p>
                                </td>
                            </tr>

                            <tr>
                                <td> <p><strong>Hipertens??o :</strong> {pathology.hypertension} </p> </td>
                                <td><p><strong>historico na familia :</strong> {pathology.historicalHypertension} </p> </td>
                            </tr>
                            <tr>
                                <td className="tdObservation" colSpan={2}>
                                    <strong>Observa????es</strong>
                                    <p> <span>{pathology.hypertensionObservations}</span> </p>
                                </td>
                            </tr>

                            <tr>
                                <td> <p><strong>Toma Medicamentos Controlados :</strong> {pathology.medicines} </p> </td>
                                <td> <p><strong>Alguem na familia toma :</strong> {pathology.historicalMedicines} </p> </td>
                            </tr>
                            <tr>
                                <td className="tdObservation" colSpan={2}>
                                    <strong>Observa????es</strong>
                                    <p> <span>{pathology.medicinesObservations}</span> </p>
                                </td>
                            </tr>

                            <tr>
                                <td> <p><strong>Alergico medicamentos :</strong> {pathology.allergicMedicines} </p> </td>
                                <td>  <p><strong>Qual medicamento :</strong> {pathology.whatMedicines} </p> </td>
                            </tr>
                        </tbody>
                    </table>
                </BoxPathology>

                <BoxPreAnalyze>
                    <div><h3>Pr?? Analise</h3></div>
                    <table>
                        <tbody>
                            <tr>
                                <td> <h4>sobre o paciente</h4> </td>
                                <td> <h4>sobre o p?? do paciente</h4> </td>
                                <td> <h4>Sobre a unha do paciente</h4> </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>cancer:</strong> {pathology.aboutThePatient_cancer ? pathology.aboutThePatient_cancer : "N??o"} </p>
                                    <p><strong>marca passo:</strong> {pathology.aboutThePatient_pacemaker ? pathology.aboutThePatient_pacemaker : "N??o"} </p>
                                    <p><strong>pinos:</strong> {pathology.aboutThePatient_pins ? pathology.aboutThePatient_pins : "N??o"} </p>
                                    <p><strong>cardiopatia:</strong> {pathology.aboutThePatient_cardiopathy ? pathology.aboutThePatient_cardiopathy : "N??o"} </p>
                                    <p><strong>Cirurgia nos p??s:</strong> {pathology.aboutThePatient_footSurgery ? pathology.aboutThePatient_footSurgery : "N??o"} </p>
                                    <p>&nbsp;</p>
                                </td>

                                <td>
                                    <p><strong>Calo:</strong> {pathology.aboutThePatientFoot_callus ? pathology.aboutThePatientFoot_callus : "N??o"} </p>
                                    <p><strong>Calosidade:</strong> {pathology.aboutThePatientFoot_callosity ? pathology.aboutThePatientFoot_callosity : "N??o"}</p>
                                    <p><strong>Fissura:</strong> {pathology.aboutThePatientFoot_fissure ? pathology.aboutThePatientFoot_fissure : "N??o"} </p>
                                    <p><strong>Ressecamento:</strong> {pathology.aboutThePatientFoot_dryness ? pathology.aboutThePatientFoot_dryness : "N??o"} </p>
                                    <p><strong>Ps??riase:</strong> {pathology.aboutThePatientFoot_psoriasis ? pathology.aboutThePatientFoot_psoriasis : "N??o"} </p>
                                    <p><strong>Verruga Pantar:</strong> {pathology.aboutThePatientFoot_pantarWart ? pathology.aboutThePatientFoot_pantarWart : "N??o"}  </p>
                                </td>

                                <td>
                                    <p><strong>Onicocriptose:</strong> {pathology.aboutThePatientNail_onychocriptosis ? pathology.aboutThePatientNail_onychocriptosis : "N??o"} </p>
                                    <p><strong>Onic??lise:</strong> {pathology.aboutThePatientNail_onycholysis ? pathology.aboutThePatientNail_onycholysis : "N??o"} </p>
                                    <p><strong>Onicomicose:</strong> {pathology.aboutThePatientNail_onychomycosis ? pathology.aboutThePatientNail_onychomycosis : "N??o"} </p>
                                    <p><strong>Onicofose:</strong> {pathology.aboutThePatientNail_onychophoresis ? pathology.aboutThePatientFoot_pantarWart : "N??o"} </p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3}> <p><strong>tipo de sensibilidade a Dor:</strong> {pathology.painSensitivity} </p></td>
                            </tr>

                            <tr>
                                <td> <p><strong>Tipo de meia que mais usa: </strong> {pathology.kindOfSock} </p>  </td>
                                <td> <p> <strong>tipo de cal??ado que mais usa:</strong> {pathology.typeOfFootwear}</p> </td>
                                <td> <p> <strong>numero do cal??ado:</strong> {pathology.numberOfShoes} </p> </td>
                            </tr>
                        </tbody>
                    </table>
                </BoxPreAnalyze>
                <br /><br />
            </BoxContainer>
        </>
    )

    function lastAttendance() {
        return (
            <Overlay>
                <ContainerModalFull>
                    <header>
                        <TitleModalCustom> <p><strong>Paciente:</strong> {patient.name}</p> </TitleModalCustom>
                    </header>
                    <BodyModalCustom>
                        {attendance.servicePoints ?
                            <table style={{ border: "1px solid black" }}>
                                <tbody>
                                    <tr><td colSpan={2}><h4>Observa????es profissonais</h4></td></tr>
                                    <tr>
                                        <td> <strong>P?? esquerdo :</strong> {attendance.footLeftObservationsProfessional} </td>
                                        <td> <strong>P?? direito :</strong> {attendance.footRightObservationsProfessional} </td>
                                    </tr>

                                    <tr><td colSpan={2}><h4>Digito press??o</h4></td></tr>
                                    <tr>
                                        <td> <strong>P?? esquerdo :</strong> {attendance.digitPressureLeftFoot}</td>
                                        <td> <strong>P?? direito :</strong> {attendance.digitPressureRightFoot} </td>
                                    </tr>

                                    <tr><td colSpan={2}><h4>Teste de monofilamento</h4></td></tr>
                                    <tr>
                                        <td> <strong>P?? esquerdo :</strong> {attendance.monofilamentTestLeftFoot} </td>
                                        <td> <strong>P?? direito :</strong> {attendance.monofilamentTestRightFoot} </td>
                                    </tr>

                                    <tr><td colSpan={2}><h4>Patologias Ungueais Presentes</h4></td></tr>
                                    <tr>
                                        <td> <strong>P?? esquerdo :</strong> {attendance.pathologyDermatologyLeftFoot} </td>
                                        <td> <strong>P?? direito :</strong>  {attendance.pathologyDermatologyRightFoot} </td>
                                    </tr>

                                    <tr>
                                        <td colSpan={2}>
                                            <h4>Procedimento Realizado</h4>
                                            <p className="textAlign">
                                                {attendance.procedureAccomplished}
                                            </p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            :
                            <NotFound> Esse Paciente n??o tem nenhum atendimento</NotFound>
                        }
                    </BodyModalCustom>
                    <ButtonModal onClick={() => setVisible(false)}>x</ButtonModal>
                </ContainerModalFull>
            </Overlay>
        );
    }
}

export default PatientData