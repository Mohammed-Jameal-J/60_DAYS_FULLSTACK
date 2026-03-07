import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL || "file:./dev.db";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: connectionString,
  }),
});

async function main() {
  await prisma.healthCheck.create({
    data: {
      message: "Hello, World!",
    },
  });
}

main().catch((e) => {
  console.error(e);
}).finally(async () => {
  await prisma.$disconnect();
});



