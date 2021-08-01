import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateApartments1626744388236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "apartments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "hotel_id",
            type: "uuid",
          },
          {
            name: "room_number",
            type: "numeric",
          },
          {
            name: "price",
            type: "numeric",
          },
          {
            name: "suite",
            type: "boolean",
          },
          {
            name: "tv",
            type: "boolean",
          },
          {
            name: "air_conditioning",
            type: "boolean",
          },
          {
            name: "room_type",
            type: "varchar",
          },
          {
            name: "availability",
            type: "boolean",
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
            name: "FKApartmentHotel",
            referencedTableName: "hotels",
            referencedColumnNames: ["id"],
            columnNames: ["hotel_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("apartments");
  }
}
