"use client";  
import { Button } from "./ui/button";
import useUserRoleChange from "@/hooks/userUserRoleChange";
import { useUserRole } from "@/hooks/useUserRole";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type UserRole = "candidate" | "interviewer";

const UserRoleSwitcher: React.FC = () => {
  const { isCandidate, isLoading, isInterviewer, c_Id } = useUserRole();
  const { changeUserRole, loading, error } = useUserRoleChange();
  const [userRole, setUserRole] = useState<UserRole>("candidate");


  React.useEffect(() => {
    if (isCandidate) setUserRole("candidate");
    else if (isInterviewer) setUserRole("interviewer");
  }, [isCandidate, isInterviewer]);

  if (isLoading) return <p>Loading...</p>;

  const handleRoleChange = async () => {
    const newRole = userRole === "candidate" ? "interviewer" : "candidate";
    setUserRole(newRole); 
    await changeUserRole(c_Id || "", newRole); 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger><Button>Switch Roles</Button> </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Role: {userRole}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleRoleChange}>
          {userRole === "interviewer" ? "Switch to Candidate" : "Switch to Interviewer"}
        </DropdownMenuItem>
        {loading && <p>Updating role...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserRoleSwitcher;
