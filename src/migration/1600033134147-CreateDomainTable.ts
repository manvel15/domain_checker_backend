import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDomainTable1600033134147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "domains" (
                                    "id" serial PRIMARY KEY, 
                                    "name" VARCHAR (255) UNIQUE NOT NULL,
                                    "expire_date" TIMESTAMP NOT NULL,
                                    "valid" boolean DEFAULT TRUE)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
