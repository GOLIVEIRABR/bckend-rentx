import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserAddPrimaryKey1640576907852 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createPrimaryKey("users", ["id"]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropPrimaryKey("users");
  }
}
