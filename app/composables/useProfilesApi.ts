import type { ProfileResponse, ProfilesResponse } from "#shared/types/profile";

export const useProfilesApi = () => {
  const fetchProfiles = async (
    count: number = 6
  ): Promise<ProfilesResponse> => {
    try {
      const response = await $fetch<ProfilesResponse>("/api/profiles", {
        query: { count },
        retry: 2,
        timeout: 10000,
      });
      return response;
    } catch (error) {
      console.error("Failed to fetch profiles:", error);
      throw error;
    }
  };

  const fetchProfile = async (id: string): Promise<ProfileResponse> => {
    try {
      const response = await $fetch<ProfileResponse>(`/api/profiles/${id}`, {
        retry: 2,
        timeout: 10000,
      });
      return response;
    } catch (error) {
      console.error(`Failed to fetch profile ${id}:`, error);
      throw error;
    }
  };

  return {
    fetchProfiles,
    fetchProfile,
  };
};
