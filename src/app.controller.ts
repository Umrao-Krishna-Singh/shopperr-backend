import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { z } from 'zod';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/myroute')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/myroute')
  printVal(@Req() req: Request): string {
    const User = z.object({
      firstName: z.string(),
      lastName: z.string(),
    });

    const { success, data, error } = User.safeParse(req.body);

    // extract the inferred type
    type User = z.infer<typeof User>;

    console.log(req.body);
    return 'done';
  }
}
