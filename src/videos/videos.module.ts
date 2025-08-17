import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosResolver } from './videos.resolver';

@Module({
  providers: [VideosService, VideosResolver],
})
export class VideosModule {}
