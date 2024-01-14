import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGithubController } from './app.github.controller';
import { AppGithubService } from './app.github.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AppGithubController],
  providers: [AppService, AppGithubService],
})
export class AppModule {}
