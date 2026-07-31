import Bunny from "../../../assets/Animals/Friends.svg";
import PolarBear from "../../../assets/Animals/Family.svg";
import Owl from "../../../assets/Animals/Professional.svg";
import Penguin from "../../../assets/Animals/Patient.svg";

export function getDefaultProfile(role) {
  if (role === "patient") {
    return {
      displayName: "Penguin",
      fullName: "Sam Rivera",
      roleLabel: "Patient",
      email: "patient@beacon.app",
      phone: "+1 (555) 010-3344",
      Mascot: Penguin,
      mascotScale: 1,
    };
  }

  if (role === "friend") {
    return {
      displayName: "Bunny",
      fullName: "Alex Rivera",
      roleLabel: "Friend",
      email: "friend@beacon.app",
      phone: "+1 (555) 014-2288",
      Mascot: Bunny,
      mascotScale: 1,
    };
  }

  if (role === "family") {
    return {
      displayName: "Bear",
      fullName: "Jordan Lee",
      roleLabel: "Family",
      email: "family@beacon.app",
      phone: "+1 (555) 019-7741",
      Mascot: PolarBear,
      mascotScale: 0.85,
    };
  }

  if (role === "professional") {
    return {
      displayName: "Owl",
      fullName: "Kelley Stevens",
      roleLabel: "Therapist",
      email: "professional@beacon.app",
      phone: "+1 (555) 029-1928",
      Mascot: Owl,
      mascotScale: 1,
    }
  }
}
