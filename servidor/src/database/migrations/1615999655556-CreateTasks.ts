import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasks1615999655556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "tasks",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        },
                        {
                            name: "tasks",
                            type: "varchar"
                        },
                        {
                            name: "dayMonth",
                            type: "varchar"
                        },
                        {
                            name: "checked",
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
        await queryRunner.dropTable('tasks')
    }

}
