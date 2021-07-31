import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateReserve1627607155276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reserves",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "apartment_id",
            type: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "birth_date",
            type: "date",
          },
          {
            name: "date_checkin",
            type: "timestamp",
          },
          {
            name: "date_checkout",
            type: "timestamp",
          },
          {
            name: "total",
            type: "numeric",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKReserveApartment",
            referencedTableName: "apartments",
            referencedColumnNames: ["id"],
            columnNames: ["apartment_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKReserveUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("reserves");
  }
}
