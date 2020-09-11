import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import {DomainEntity} from './model/domain.entity'
let MULTER_UPLOAD_FILESIZE_BYTES = 1.024e9;

@Module({
  imports: [
    MulterModule.register({ limits: { fileSize: MULTER_UPLOAD_FILESIZE_BYTES }, }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([DomainEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
