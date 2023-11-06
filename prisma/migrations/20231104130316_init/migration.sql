-- CreateEnum
CREATE TYPE "EventStatusEnum" AS ENUM ('PLANNED', 'ONGOING', 'CANCELLED', 'POSTPONED');

-- CreateTable
CREATE TABLE "NoteSubcategory" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "NoteSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "catId" TEXT NOT NULL,
    "strId" TEXT NOT NULL,
    "tags" TEXT[],
    "title" TEXT NOT NULL,
    "content" TEXT,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "strId" TEXT NOT NULL,
    "tags" TEXT[],
    "title" TEXT NOT NULL,
    "content" TEXT,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FursuitData" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT,
    "ownerName" TEXT,
    "name" TEXT,
    "ip" TEXT,
    "externTemp" INTEGER NOT NULL DEFAULT 0,
    "internTemp" INTEGER NOT NULL DEFAULT 0,
    "fansEnabled" BOOLEAN NOT NULL DEFAULT true,
    "cyberLinesColor" TEXT,
    "cyberLinesBrightness" INTEGER NOT NULL DEFAULT 100,
    "cyberCollarText" TEXT DEFAULT '<< Lynix >>',
    "audioLink" BOOLEAN NOT NULL DEFAULT false,
    "suspended" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FursuitData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetupData" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,
    "pin" TEXT,
    "endTime" TIMESTAMP(3),
    "ended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MeetupData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "strId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "description" TEXT NOT NULL,
    "eventMeetups" TEXT[],
    "eventLocation" TEXT,
    "eventStart" TIMESTAMP(3) NOT NULL,
    "eventEnd" TIMESTAMP(3) NOT NULL,
    "eventChecklist" JSONB,
    "isFurryConvention" BOOLEAN NOT NULL DEFAULT false,
    "status" "EventStatusEnum" NOT NULL DEFAULT 'PLANNED',

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_catId_fkey" FOREIGN KEY ("catId") REFERENCES "NoteSubcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
