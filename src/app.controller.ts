import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/upload")
  @UseInterceptors(AnyFilesInterceptor())
  async upload(@Body() body: any, @UploadedFiles() files: any[]): Promise<any> {
    console.log(body);
    console.log(files);
    console.log(520)
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg);
  }
}
