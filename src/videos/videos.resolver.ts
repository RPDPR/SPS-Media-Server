import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Video as VideoModel, VideoDeleted } from './videos.model';
import { VideosService } from './videos.service';

@Resolver(() => VideoModel)
export class VideosResolver {
  constructor(private videosService: VideosService) {}

  @Query(() => VideoModel)
  async getById(@Args('id') id: string): Promise<VideoModel> {
    return await this.videosService.findById(id);
  }

  @Query(() => [VideoModel])
  async getAll(): Promise<VideoModel[]> {
    return await this.videosService.findAll();
  }

  @Mutation(() => VideoModel)
  async addNew(
    @Args('title') title: string,
    @Args('thumbnail', { nullable: true }) thumbnail?: string,
  ): Promise<VideoModel> {
    return await this.videosService.addNew(title, thumbnail ?? undefined);
  }

  @Mutation(() => VideoModel)
  async removeOne(@Args('id') id: string): Promise<VideoModel> {
    return await this.videosService.removeOne(id);
  }
  @Mutation(() => VideoDeleted)
  async removeAll(): Promise<VideoDeleted> {
    return await this.videosService.removeAll();
  }
}
