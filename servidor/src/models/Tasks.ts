import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tasks: string;

    @Column()
    dayMonth: string;

    @Column()
    checked: boolean;

    @CreateDateColumn()
    create_at: Date;

}

export default Tasks