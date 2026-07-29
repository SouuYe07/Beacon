import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from "react-native";
import Search from "../../components/Search.js";
import Background from "../../components/Background";
import useSelectLayout from "../../hooks/useSelectLayout";
import IconButton from '../../components/IconButton.js';
import ProfileSummaryModal from '../../components/homepage/ProfileSummaryModal.js';
import NotificationsModal from '../../components/homepage/NotificationsModal.js';
import UpdateDetailModal from '../../components/homepage/UpdateDetailModal.js';
import { useProfessionalRole } from '../../components/professional/ProfessionalRoleContext.js';
import { getDefaultProfile } from '../../components/homepage/profileDefaults.js';
import useChatsLayout from '../../hooks/useChatsLayout.js';
import OwlSvg from "../../../assets/Navigation/Owl.svg";

export default function Homepage() {
  const role = useProfessionalRole();
  const { chatsLnsets, s, styles: chatL } = useChatsLayout();
  const { insets, styles } = useSelectLayout();
  const ProfileIcon = OwlSvg;
  const [profile, setProfile] = useState(() => getDefaultProfile(role));
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    setProfile(getDefaultProfile(role));
  }, [role]);

  return (
    <View className="flex-1 relative">
      <Background />

      <ScrollView
        className="z-10"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 16,
          paddingHorizontal: styles.sidePad,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View className="flex-row center mb-3 justify-center">
          <View className="justify-center flex">
            <Text className="font-geom-medium"
              style={{
                fontSize: styles.headingSize,
                lineHeight: styles.headingLine,
                width: styles.headingWidth,
                marginBottom: styles.headingGap,
              }}
            >
              Patient List
            </Text>
          </View>

          <View className="flex-row items-center">
            <View style={{ marginRight: s(10) }}>
              <IconButton
                name="bell-outline"
                size={s(30)}
                buttonSize={s(52)}
                accessibilityLabel="Notifications"
                onPress={() => setNotificationsOpen(true)}
              />
            </View>
            <IconButton
              Icon={ProfileIcon}
              size={s(32)}
              buttonSize={s(52)}
              accessibilityLabel="Account"
              iconColor="#262626"
              onPress={() => setProfileOpen(true)}
            />
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
        </View>

        <Search />
      </ScrollView>
    </View>
  );
}
