import { createContext, useContext } from "react";

/** @type {React.Context<'professional'>} */
export const FriendsRoleContext = createContext("professional");

export function useProfessionalRole() {
  return useContext(FriendsRoleContext);
}
