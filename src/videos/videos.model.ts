import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Video {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  thumbnail?: string;
}

@ObjectType()
export class VideoDeleted {
  @Field(() => Int)
  count: number;
}
