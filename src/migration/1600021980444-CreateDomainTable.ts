import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDomainTable1600021980444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "domain" (
                                    "id" serial PRIMARY KEY, 
                                    "name" VARCHAR (255) UNIQUE NOT NULL,
                                    "expire_date" TIMESTAMP NOT NULL,
                                    "valid" boolean DEFAULT TRUE)`);
                                    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
