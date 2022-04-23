import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAttendance1615992667382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "attendances",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        },
                        {
                            name: "servicePoints",
                            type: "int",
                        },
                        {
                            name: "footLeftObservationsProfessional",
                            type: "varchar"
                        },
                        {
                            name: "footRightObservationsProfessional",
                            type: "varchar"
                        },
                        {
                            name: "digitPressureLeftFoot",
                            type: "varchar"
                        },
                        {
                            name: "digitPressureRightFoot",
                            type: "varchar"
                        },
                        {
                            name: "monofilamentTestLeftFoot",
                            type: "varchar"
                        },
                        {
                            name: "monofilamentTestRightFoot",
                            type: "varchar"
                        },
                        {
                            name: "pathologyDermatologyLeftFoot",
                            type: "varchar"
                        },
                        {
                            name: "pathologyDermatologyRightFoot",
                            type: "varchar"
                        },
                        {
                            name: "pathologyNailsPresentLeftFoot",
                            type: "varchar"
                        },
                        {
                            name: "pathologyNailsPresentRightFoot",
                            type: "varchar"
                        },
                        {
                            name: "procedureAccomplished",
                            type: "text"
                        },
                        {
                            name: "patient_id",
                            type: "int"
                        },
                        {
                            name: "create_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('attendances')
    }

}
