import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('attendances')
class Attendance {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    servicePoints: number;

    @Column()
    footLeftObservationsProfessional: "string";

    @Column()
    footRightObservationsProfessional: "string";

    @Column()
    digitPressureLeftFoot: "string";

    @Column()
    digitPressureRightFoot: "string";

    @Column()
    monofilamentTestLeftFoot: "string";

    @Column()
    monofilamentTestRightFoot: "string";

    @Column()
    pathologyDermatologyLeftFoot: "string";

    @Column()
    pathologyDermatologyRightFoot: "string";

    @Column()
    pathologyNailsPresentLeftFoot: "string";

    @Column()
    pathologyNailsPresentRightFoot: "string";

    @Column()
    procedureAccomplished: "string";

    @Column()
    patient_id: number;

    @CreateDateColumn()
    create_at: Date;

}

export default Attendance