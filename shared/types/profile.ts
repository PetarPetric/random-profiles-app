import { z } from "zod";

// Profile schema with 13 attributes
export const ProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  avatarUrl: z.url(),
  phone: z.string(),
  username: z.string(),
  birthDate: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string(),
  }),
  jobTitle: z.string(),
  company: z.string(),
  bio: z.string(),
  website: z.url(),
});

// Array of profiles schema
export const ProfilesSchema = z.array(ProfileSchema);

// Infer TypeScript types from schemas
export type Profile = z.infer<typeof ProfileSchema>;
export type Profiles = z.infer<typeof ProfilesSchema>;

// API response schemas
export const ProfileResponseSchema = z.object({
  success: z.boolean(),
  data: ProfileSchema,
});

export const ProfilesResponseSchema = z.object({
  success: z.boolean(),
  data: ProfilesSchema,
  count: z.number(),
});

export type ProfileResponse = z.infer<typeof ProfileResponseSchema>;
export type ProfilesResponse = z.infer<typeof ProfilesResponseSchema>;
