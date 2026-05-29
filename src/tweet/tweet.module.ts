import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';

@Module({
  controllers: [TweetController],
  providers: [],
})
export class TweetModule {}
