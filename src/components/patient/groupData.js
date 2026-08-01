/** Mock group members for the Patient Group tab */

export const GROUP_FILTERS = ["All", "Friend", "Family", "Health Professional"];

export const GROUP_MEMBERS = [
  {
    id: "g1",
    name: "Maya Chen",
    phone: "(+1) 213 555-0142",
    email: "maya.chen@email.com",
    role: "friend",
    roleLabel: "Friend",
    relationship: "Close friend",
    linkedSince: "March 12, 2026",
  },
  {
    id: "g2",
    name: "Jordan Lee",
    phone: "(+1) 310 555-0198",
    email: "jordan.lee@email.com",
    role: "friend",
    roleLabel: "Friend",
    relationship: "School friend",
    linkedSince: "April 3, 2026",
  },
  {
    id: "g3",
    name: "Mom Rivera",
    phone: "(+1) 818 555-0110",
    email: "mom.rivera@email.com",
    role: "family",
    roleLabel: "Family",
    relationship: "Mother",
    linkedSince: "January 8, 2026",
  },
  {
    id: "g4",
    name: "Dad Rivera",
    phone: "(+1) 818 555-0111",
    email: "dad.rivera@email.com",
    role: "family",
    roleLabel: "Family",
    relationship: "Father",
    linkedSince: "January 8, 2026",
  },
  {
    id: "g5",
    name: "Dr. Olivia Hart",
    phone: "(+1) 424 555-0177",
    email: "o.hart@beacon.care",
    role: "professional",
    roleLabel: "Dietician",
    relationship: "Care team",
    linkedSince: "February 1, 2026",
  },
  {
    id: "g6",
    name: "Dr. Sam Okonkwo",
    phone: "(+1) 323 555-0166",
    email: "s.okonkwo@beacon.care",
    role: "professional",
    roleLabel: "Psychiatrist",
    relationship: "Care team",
    linkedSince: "February 1, 2026",
  },
];

export function getGroupMemberById(id) {
  return GROUP_MEMBERS.find((m) => m.id === id) ?? null;
}

/** Propose removal is only for Friend / Family members (not health professionals). */
export function canProposeRemoval(member) {
  return member?.role === "friend" || member?.role === "family";
}
