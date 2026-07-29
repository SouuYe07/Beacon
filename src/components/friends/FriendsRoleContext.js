import { createContext, useContext } from "react";

/** @type {React.Context<'friend' | 'family'>} */
export const FriendsRoleContext = createContext("family");

export function useFriendsRole() {
  return useContext(FriendsRoleContext);
}
