import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';

let MULTER_UPLOAD_FILESIZE_BYTES = 1.024e9;

@Module({
  imports: [MulterModule.register({
    limits: { fileSize: MULTER_UPLOAD_FILESIZE_BYTES },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
