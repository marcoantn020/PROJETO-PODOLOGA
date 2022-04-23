import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('patients')
class Patient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recommendation: string;

    @Column()
    name: string;

    @Column()
    birthDate: string;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    cell: string;

    @Column()
    profession: string;

    @Column()
    zipCode: string;

    @Column()
    city: string;

    @Column()
    address: string;

    @Column()
    number: string;

    @Column()
    district: string;

    @Column()
    practiceActivity: string;

    @Column()
    whatActivity: string;

    @Column()
    hasPathology: boolean;

    @CreateDateColumn()
    create_at: Date;


}

export default Patient