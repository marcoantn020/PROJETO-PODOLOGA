import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatients1615948435439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "patients",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        },
                        {
                            name: "recommendation",
                            type: "varchar",
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },

                        {
                            name: "birthDate",
                            type: "varchar",
                        },

                        {
                            name: "gender",
                            type: "varchar",
                        },

                        {
                            name: "email",
                            type: "varchar",
                        },

                        {
                            name: "cell",
                            type: "varchar",
                        },

                        {
                            name: "profession",
                            type: "varchar",
                        },

                        {
                            name: "zipCode",
                            type: "varchar",
                        },

                        {
                            name: "city",
                            type: "varchar",
                        },

                        {
                            name: "address",
                            type: "varchar",
                        },

                        {
                            name: "number",
                            type: "varchar",
                        },

                        {
                            name: "district",
                            type: "varchar",
                        },

                        {
                            name: "practiceActivity",
                            type: "boolean",
                            default: false
                        },

                        {
                            name: "whatActivity",
                            type: "varchar",
                        },

                        {
                            name: "hasPathology",
                            type: "boolean",
                            default: false
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
        await queryRunner.dropTable('patients')
    }

}
