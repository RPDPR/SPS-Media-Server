import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosResolver } from './videos/videos.resolver';
import { VideosService } from './videos/videos.service';
import { VideosModule } from './videos/videos.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    VideosModule,
  ],
  controllers: [AppController],
  providers: [AppService, VideosResolver, VideosService],
})
export class AppModule {}
