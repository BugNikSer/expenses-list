-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "hash" VARCHAR(500) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

