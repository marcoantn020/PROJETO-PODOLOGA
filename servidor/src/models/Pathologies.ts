import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('pathologies')
class Pathologies {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    diabetes: string;

    @Column()
    historicalDiabetes: string;

    @Column()
    diabetesObservations: string;

    @Column()
    hypertension: string;

    @Column()
    historicalHypertension: string;

    @Column()
    hypertensionObservations: string;

    @Column()
    medicines: string;

    @Column()
    historicalMedicines: string;

    @Column()
    medicinesObservations: string;

    @Column()
    allergicMedicines: string;

    @Column()
    whatMedicines: string;

    @Column()
    aboutThePatient_cancer: string;

    @Column()
    aboutThePatient_pacemaker: string;

    @Column()
    aboutThePatient_pins: string;

    @Column()
    aboutThePatient_cardiopathy: string;

    @Column()
    aboutThePatient_footSurgery: string;

    @Column()
    aboutThePatientFoot_callus: string;

    @Column()
    aboutThePatientFoot_callosity: string;

    @Column()
    aboutThePatientFoot_fissure: string;

    @Column()
    aboutThePatientFoot_dryness: string;

    @Column()
    aboutThePatientFoot_psoriasis: string;

    @Column()
    aboutThePatientFoot_pantarWart: string;

    @Column()
    aboutThePatientNail_onychocriptosis: string;

    @Column()
    aboutThePatientNail_onycholysis: string;

    @Column()
    aboutThePatientNail_onychomycosis: string;

    @Column()
    aboutThePatientNail_onychophoresis: string;

    @Column()
    painSensitivity: string;

    @Column()
    kindOfSock: string;

    @Column()
    typeOfFootwear: string;

    @Column()
    numberOfShoes: string;

    @Column()
    patient_id: number;
}

export default Pathologies