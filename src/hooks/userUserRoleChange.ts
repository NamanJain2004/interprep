
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

// Define allowed roles
type UserRole = "candidate" | "interviewer";

const useUserRoleChange = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const updateRole = useMutation(api.users.changeUserRole);

  // Function to change user role
  const changeUserRole = async (clerkId: string, newRole: UserRole) => {
    setLoading(true);
    setError(null);
    try {
      await updateRole({ clerkId, newRole });
      console.log("Role updated successfully!");
    } catch (err) {
      console.error("Failed to update role:", err);
      setError("Failed to update role. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { changeUserRole, loading, error };
};

export default useUserRoleChange;
