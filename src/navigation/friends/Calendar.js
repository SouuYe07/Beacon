import CalendarPage from "../CalendarPage.js";
import { useFriendsRole } from "../../components/friends/FriendsRoleContext";
import BunnySvg from "../../../assets/Navigation/Bunny.svg";
import BearSvg from "../../../assets/Navigation/Bear.svg";
import FriendsImage from "../../../assets/Animals/Friends.svg";
import FamilyImage from "../../../assets/Animals/Family.svg";

export default function Calendar() {
  const role = useFriendsRole();
  const Icon = role === "friend" ? BunnySvg : BearSvg;
  const Image = role === "friend" ? FriendsImage : FamilyImage;
  return <CalendarPage Icon={Icon} Image={Image} />;
}
