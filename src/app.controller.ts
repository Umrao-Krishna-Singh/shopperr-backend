import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/myroute')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/myroute')
  printVal(@Req() request: Request): string {
    console.log('received data', request.hostname);
    return 'done';
  }
}
