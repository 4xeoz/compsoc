import { prisma } from "./prisma";
import { faker } from '@faker-js/faker';

export async function main() {
  console.log('🌱 Seeding database with random members...');

  const years = [2022, 2023, 2024];
  const members = years.flatMap(year =>
    Array.from({ length: 10 }, () => ({
      name: faker.person.fullName(),
      position: faker.person.jobTitle(),
      image: faker.image.avatar(),
      year: year,
      website: faker.internet.url(),
      linkedin: faker.internet.url(),
      instagram: faker.internet.url(),
    }))
  );

  // Insert generated members into the database
  await prisma.member.createMany({
    data: members,
  });

  console.log('✅ Seeded 30 random members!');
}


main()
  .catch((e) => {
    console.error(e);
  });
