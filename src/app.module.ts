import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'; 
import { TweetController } from './tweet/tweet.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, TweetController],
  providers: [AppService],
})
export class AppModule {}
