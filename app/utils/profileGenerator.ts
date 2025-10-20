import { faker } from "@faker-js/faker";
import type { Profile } from "@/types/profile";

/**
 * Generate a single random profile using Faker
 */
export function generateProfile(): Profile {
  const config = useRuntimeConfig();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const username = faker.internet.username({ firstName, lastName });

  // Use TestingBot Avatar Generator
  const avatarUrl = `${config.public.AVATAR_API}/avatar/${username}.png`;

  return {
    id: faker.string.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    avatarUrl,
    phone: faker.phone.number(),
    username,
    birthDate: faker.date
      .birthdate({ min: 18, max: 80, mode: "age" })
      .toISOString()
      .split("T")[0] as string,
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
    jobTitle: faker.person.jobTitle(),
    company: faker.company.name(),
    bio: faker.person.bio(),
    website: faker.internet.url(),
  };
}

/**
 * Generate multiple random profiles
 */
export function generateProfiles(count: number): Profile[] {
  return Array.from({ length: count }, () => generateProfile());
}
