/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `videos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."videos_thumbnail_key";

-- AlterTable
ALTER TABLE "public"."videos" ALTER COLUMN "thumbnail" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "videos_id_key" ON "public"."videos"("id");
