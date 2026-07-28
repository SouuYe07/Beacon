import Tabs from "../components/friends/Tabs";

export default function FriendsHome({ route }) {
  const role = route.params?.role === "friend" ? "friend" : "family";
  return <Tabs role={role} />;
}
