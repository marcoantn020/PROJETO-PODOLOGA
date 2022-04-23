import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePathologies1615983584833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "pathologies",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        },

                        {
                            name: "diabetes",
                            type: "varchar"
                        },

                        {
                            name: "historicalDiabetes",
                            type: "varchar"
                        },

                        {
                            name: "diabetesObservations",
                            type: "text",
                        },

                        {
                            name: "hypertension",
                            type: "varchar"
                        },

                        {
                            name: "historicalHypertension",
                            type: "varchar"
                        },

                        {
                            name: "hypertensionObservations",
                            type: "text",
                        },

                        {
                            name: "medicines",
                            type: "varchar"
                        },

                        {
                            name: "historicalMedicines",
                            type: "varchar"
                        },

                        {
                            name: "medicinesObservations",
                            type: "text",
                        },

                        {
                            name: "allergicMedicines",
                            type: "varchar"
                        },

                        {
                            name: "whatMedicines",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatient_cancer",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatient_pacemaker",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatient_pins",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatient_cardiopathy",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatient_footSurgery",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientFoot_callus",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientFoot_callosity",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientFoot_fissure",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientFoot_dryness",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientFoot_psoriasis",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientFoot_pantarWart",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientNail_onychocriptosis",
                            type: "varchar",
                        },

                        {
                            name: "aboutThePatientNail_onycholysis",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientNail_onychomycosis",
                            type: "varchar"
                        },

                        {
                            name: "aboutThePatientNail_onychophoresis",
                            type: "varchar"
                        },

                        {
                            name: "painSensitivity",
                            type: "varchar"
                        },

                        {
                            name: "kindOfSock",
                            type: "varchar"
                        },

                        {
                            name: "typeOfFootwear",
                            type: "varchar"
                        },

                        {
                            name: "numberOfShoes",
                            type: "varchar"
                        },

                        {
                            name: "patient_id",
                            type: "int"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pathologies')
    }


}
