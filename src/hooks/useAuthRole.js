import { useUser } from "@clerk/clerk-react";

export function useAuthRole() {
  const { isLoaded, isSignedIn, user } = useUser();

  const role = user?.publicMetadata?.role || null;

  return {
    isLoaded,
    isSignedIn,
    role,
    user
  };
}
