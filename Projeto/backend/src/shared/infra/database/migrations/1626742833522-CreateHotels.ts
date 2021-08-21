import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHotels1626742833522 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "hotels",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name_hotel",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
          },
          {
            name: "longitude",
            type: "decimal",
          },
          {
            name: "localization",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "telephone",
            type: "varchar",
          },
          {
            name: "rooms_number",
            type: "numeric",
          },
          {
            name: "pool",
            type: "boolean",
          },
          {
            name: "wifi",
            type: "boolean",
          },
          {
            name: "parking",
            type: "boolean",
          },
          {
            name: "breakfast",
            type: "boolean",
          },
          {
            name: "owner_id",
            type: "uuid",
            isNullable: true,
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
            name: "FKOwnerHotel",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["owner_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("hotels");
  }
}
