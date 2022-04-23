export interface IProps {
    submitForm: any;
    validations?: any;
    comeBack?: any;
    data?: any;
}

export interface IPropsEditPatients {
    submitForm: any;
    validations?: any;
    comeBack?: any;
    data: DataPatients;
}

export interface IPropsEditPathology {
    submitForm: any;
    validations?: any;
    comeBack?: any;
    data: DataPathologies;
}

export interface IIdParams {
    id: string;
}

export interface DataPathologies {
    id: number;
    diabetes: string;
    historicalDiabetes: string;
    diabetesObservations: string;
    hypertension: string;
    historicalHypertension: string;
    hypertensionObservations: string;
    medicines: string;
    historicalMedicines: string;
    medicinesObservations: string;
    allergicMedicines: string;
    whatMedicines: string;
    aboutThePatient_cancer: string;
    aboutThePatient_pacemaker: string;
    aboutThePatient_pins: string;
    aboutThePatient_cardiopathy: string;
    aboutThePatient_footSurgery: string;
    aboutThePatientFoot_callus: string;
    aboutThePatientFoot_callosity: string;
    aboutThePatientFoot_fissure: string;
    aboutThePatientFoot_dryness: string;
    aboutThePatientFoot_psoriasis: string;
    aboutThePatientFoot_pantarWart: string;
    aboutThePatientNail_onychocriptosis: string;
    aboutThePatientNail_onycholysis: string;
    aboutThePatientNail_onychomycosis: string;
    aboutThePatientNail_onychophoresis: string;
    painSensitivity: string;
    kindOfSock: string;
    typeOfFootwear: string;
    numberOfShoes: string;
    patient_id: number;
}

export interface DataPatients {
    id: number;
    recommendation: string;
    name: string;
    birthDate: string;
    gender: string;
    email: string;
    cell: string;
    profession: string;
    zipCode: string;
    city: string;
    address: string;
    number: string;
    district: string;
    practiceActivity: string;
    whatActivity: string;
    hasPathology: string;
    create_at: Date;
}

export interface DataAttendances {
    id: number;
    servicePoints: number;
    footLeftObservationsProfessional: "string";
    footRightObservationsProfessional: "string";
    digitPressureLeftFoot: "string";
    digitPressureRightFoot: "string";
    monofilamentTestLeftFoot: "string";
    monofilamentTestRightFoot: "string";
    pathologyDermatologyLeftFoot: "string";
    pathologyDermatologyRightFoot: "string";
    pathologyNailsPresentLeftFoot: "string";
    pathologyNailsPresentRightFoot: "string";
    procedureAccomplished: "string";
    patient_id: number;
    create_at: Date;
}

export interface DataTasks {
    id: number;
    tasks: string;
    dayMonth: string;
    checked: string;
    create_at: Date;
}

export interface DataUsers {
    id: number;
    name: string;
    username: string;
    password: string;
    create_at: Date;
}