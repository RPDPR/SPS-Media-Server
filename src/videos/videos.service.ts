import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Video as VideoModel, VideoDeleted } from './videos.model';
import { Video as VideoEntity } from '@prisma/client';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}
  private readonly videos: VideoModel[] = [
    {
      id: '1',
      title: 'Nikita is standing',
      thumbnail: 'bufferData/nikitaIsStanding.mp4',
    },
    {
      id: '2',
      title: 'Nikita is piercing a miner',
      thumbnail: 'bufferData/nikitaIsPiercingAMiner.mp4',
    },
    {
      id: '3',
      title: 'Nikita is dead',
      thumbnail: 'bufferData/nikitaIsDead.mp4',
    },
  ];

  async findById(id: string): Promise<VideoModel> {
    const prismaAnswer: VideoEntity = await this.prisma.video.findUnique({
      where: { id },
    });

    return {
      id: prismaAnswer.id,
      title: prismaAnswer.title,
      thumbnail: prismaAnswer.thumbnail,
    };
  }
  async findAll(): Promise<VideoModel[]> {
    const prismaAnswer: VideoEntity[] = await this.prisma.video.findMany();
    return prismaAnswer.map((videoEntity) => {
      return {
        id: videoEntity.id,
        title: videoEntity.title,
        thumbnail: videoEntity.thumbnail,
      };
    });
  }
  async addNew(title: string, thumbnail?: string): Promise<VideoModel> {
    const prismaAnswer: VideoEntity = await this.prisma.video.create({
      data: { title: title, thumbnail: thumbnail ?? null },
    });
    return {
      id: prismaAnswer.id,
      title: prismaAnswer.title,
      thumbnail: prismaAnswer.thumbnail,
    };
  }
  async removeOne(id: string): Promise<VideoModel> {
    const prismaAnswer: VideoEntity = await this.prisma.video.delete({
      where: { id },
    });
    return {
      id: prismaAnswer.id,
      title: prismaAnswer.title,
      thumbnail: prismaAnswer.thumbnail,
    };
  }
  async removeAll(): Promise<VideoDeleted> {
    const prismaAnswer = await this.prisma.video.deleteMany();
    return { count: prismaAnswer.count };
  }
}
