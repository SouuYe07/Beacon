import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Search from "../../components/Search.js";
import Background from "../../components/Background";
import IconButton from "../../components/IconButton.js";
import ProfileSummaryModal from "../../components/homepage/ProfileSummaryModal.js";
import NotificationsModal from "../../components/homepage/NotificationsModal.js";
import { useProfessionalRole } from "../../components/professional/ProfessionalRoleContext.js";
import { getDefaultProfile } from "../../components/homepage/profileDefaults.js";
import useChatsLayout from "../../hooks/useChatsLayout.js";
import OwlSvg from "../../../assets/Navigation/Owl.svg";
import PatientListCard from "../../components/PatientListCard.js";

const PATIENTS = [
  { id: "p1", name: "User user", phone: "(+1) 213 555-0123", nextTalk: "August 11, 2026" },
  { id: "p2", name: "User user", phone: "(+1) 213 555-0123", nextTalk: "August 11, 2026" },
  { id: "p3", name: "User user", phone: "(+1) 213 555-0123", nextTalk: "August 11, 2026" },
  { id: "p4", name: "User user", phone: "(+1) 213 555-0123", nextTalk: "August 11, 2026" },
  { id: "p5", name: "User user", phone: "(+1) 213 555-0123", nextTalk: "August 11, 2026" },
];

export default function Homepage() {
  const role = useProfessionalRole();
  const { insets, s, styles: L } = useChatsLayout();
  const ProfileIcon = OwlSvg;
  const [profile, setProfile] = useState(() => getDefaultProfile(role));
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setProfile(getDefaultProfile(role));
  }, [role]);

  const filtered = PATIENTS.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.phone.toLowerCase().includes(q) ||
      p.nextTalk.toLowerCase().includes(q)
    );
  });

  return (
    <View className="flex-1 relative">
      <Background />

      <View
        className="z-10 flex-1"
        style={{
          paddingTop: insets.top + L.topPad,
          paddingBottom: L.tabClearance,
          paddingHorizontal: L.sidePad,
        }}
      >
        <View
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: L.titleGap,
            minHeight: s(48),
          }}
        >
          <Text
            className="font-geom-bold text-[#262626]"
            style={{
              flex: 1,
              fontSize: L.titleSize,
              lineHeight: L.titleSize * 1.15,
              paddingRight: s(8),
            }}
            numberOfLines={1}
          >
            Patient List
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: s(8) }}>
              <IconButton
                name="bell-outline"
                size={s(28)}
                buttonSize={s(48)}
                accessibilityLabel="Notifications"
                onPress={() => setNotificationsOpen(true)}
              />
            </View>
            <IconButton
              Icon={ProfileIcon}
              size={s(30)}
              buttonSize={s(48)}
              accessibilityLabel="Account"
              iconColor="#262626"
              onPress={() => setProfileOpen(true)}
            />
          </View>
        </View>

        <ProfileSummaryModal
          visible={profileOpen}
          onClose={() => setProfileOpen(false)}
          profile={profile}
          onSaveProfile={setProfile}
          s={s}
        />

        <NotificationsModal
          visible={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
          s={s}
        />

        <Search value={query} onChangeText={setQuery} placeholder="Search" />

        <View
          style={{
            flex: 1,
            width: L.contentWidth,
            alignSelf: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: s(30),
            overflow: "hidden",
            minHeight: s(420),
          }}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              alignItems: "center",
              paddingVertical: s(16),
              paddingHorizontal: s(12),
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
          >
            {filtered.length === 0 ? (
              <Text
                className="font-geom-regular"
                style={{
                  fontSize: s(16),
                  color: "#5A5A5A",
                  marginTop: s(40),
                  textAlign: "center",
                }}
              >
                No patients match your search.
              </Text>
            ) : (
              filtered.map((patient) => (
                <PatientListCard
                  key={patient.id}
                  name={patient.name}
                  phone={patient.phone}
                  nextTalk={patient.nextTalk}
                  s={s}
                />
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
