import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [PostsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
