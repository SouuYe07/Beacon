import { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ACCENT = "#32759F";

function InfoRow({ label, value, s, last }) {
  return (
    <View
      style={{
        paddingVertical: s(12),
        borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.08)",
      }}
    >
      <Text
        className="font-geom-medium text-[#5A5A5A]"
        style={{ fontSize: s(12), marginBottom: s(4) }}
      >
        {label}
      </Text>
      <Text
        className="font-geom-semibold text-[#262626]"
        style={{ fontSize: s(16) }}
      >
        {value}
      </Text>
    </View>
  );
}

function EditField({ label, value, onChangeText, s, last, keyboardType, autoCapitalize }) {
  return (
    <View
      style={{
        paddingVertical: s(10),
        borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.08)",
      }}
    >
      <Text
        className="font-geom-medium text-[#5A5A5A]"
        style={{ fontSize: s(12), marginBottom: s(6) }}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#9A9A9A"
        className="font-geom-semibold text-[#262626]"
        style={{
          fontSize: s(16),
          paddingVertical: s(4),
          includeFontPadding: false,
        }}
      />
    </View>
  );
}

export default function ProfileSummaryModal({
  visible,
  onClose,
  s,
  profile,
  onSaveProfile,
}) {
  const navigation = useNavigation();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);

  useEffect(() => {
    if (visible) {
      setEditing(false);
      setDraft(profile);
    }
  }, [visible, profile]);

  const Mascot = profile.Mascot;
  const mascotSize = s(110) * (profile.mascotScale ?? 1);

  const signOut = () => {
    onClose?.();
    const root = navigation.getParent() ?? navigation;
    root.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "SelectUser" }],
      })
    );
  };

  const save = () => {
    onSaveProfile?.({
      ...profile,
      displayName: draft.displayName.trim() || profile.displayName,
      fullName: draft.fullName.trim() || profile.fullName,
      email: draft.email.trim() || profile.email,
      phone: draft.phone.trim() || profile.phone,
    });
    setEditing(false);
  };

  const cancelEdit = () => {
    setDraft(profile);
    setEditing(false);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={editing ? cancelEdit : onClose}
      statusBarTranslucent
    >
      <Pressable style={styles.backdrop} onPress={editing ? undefined : onClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.center}
        >
          <Pressable
            onPress={() => {}}
            style={[
              styles.sheet,
              {
                borderRadius: s(30),
                paddingHorizontal: s(20),
                paddingTop: s(18),
                paddingBottom: s(20),
                marginHorizontal: s(24),
                maxHeight: "88%",
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: s(16),
              }}
            >
              <Text
                className="font-geom-bold text-[#262626]"
                style={{ fontSize: s(24), lineHeight: s(28) }}
              >
                {editing ? "Edit Profile" : "Profile"}
              </Text>
              <Pressable
                onPress={editing ? cancelEdit : onClose}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={editing ? "Cancel edit" : "Close profile"}
              >
                <MaterialCommunityIcons name="close" size={s(24)} color="#5A5A5A" />
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              bounces={false}
            >
              <View style={{ alignItems: "center", marginBottom: s(18) }}>
                <View
                  style={{
                    width: s(128),
                    height: s(128),
                    borderRadius: s(64),
                    backgroundColor: "#F3F7F9",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    marginBottom: s(12),
                  }}
                >
                  <Mascot width={mascotSize} height={mascotSize} />
                </View>

                {!editing ? (
                  <Text
                    className="font-geom-bold text-[#262626]"
                    style={{ fontSize: s(26), lineHeight: s(30) }}
                  >
                    {profile.displayName}
                  </Text>
                ) : null}

                <View
                  style={{
                    marginTop: editing ? 0 : s(8),
                    paddingHorizontal: s(14),
                    paddingVertical: s(4),
                    borderRadius: s(999),
                    backgroundColor: "rgba(50, 117, 159, 0.12)",
                  }}
                >
                  <Text
                    className="font-geom-semibold"
                    style={{ fontSize: s(14), color: ACCENT }}
                  >
                    {profile.roleLabel}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#F7FAFB",
                  borderRadius: s(20),
                  paddingHorizontal: s(16),
                  marginBottom: s(18),
                }}
              >
                {editing ? (
                  <>
                    <EditField
                      label="Display name"
                      value={draft.displayName}
                      onChangeText={(displayName) =>
                        setDraft((prev) => ({ ...prev, displayName }))
                      }
                      s={s}
                      autoCapitalize="words"
                    />
                    <EditField
                      label="Full name"
                      value={draft.fullName}
                      onChangeText={(fullName) =>
                        setDraft((prev) => ({ ...prev, fullName }))
                      }
                      s={s}
                      autoCapitalize="words"
                    />
                    <EditField
                      label="Email"
                      value={draft.email}
                      onChangeText={(email) =>
                        setDraft((prev) => ({ ...prev, email }))
                      }
                      s={s}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    <EditField
                      label="Phone"
                      value={draft.phone}
                      onChangeText={(phone) =>
                        setDraft((prev) => ({ ...prev, phone }))
                      }
                      s={s}
                      keyboardType="phone-pad"
                      last
                    />
                  </>
                ) : (
                  <>
                    <InfoRow label="Full name" value={profile.fullName} s={s} />
                    <InfoRow label="Email" value={profile.email} s={s} />
                    <InfoRow label="Phone" value={profile.phone} s={s} last />
                  </>
                )}
              </View>

              {editing ? (
                <>
                  <Pressable
                    onPress={save}
                    style={{
                      height: s(52),
                      borderRadius: s(26),
                      backgroundColor: ACCENT,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: s(10),
                    }}
                  >
                    <Text
                      className="font-geom-semibold text-white"
                      style={{ fontSize: s(16) }}
                    >
                      Save Changes
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={cancelEdit}
                    style={{
                      height: s(52),
                      borderRadius: s(26),
                      backgroundColor: "#FFFFFF",
                      borderWidth: 1.5,
                      borderColor: "#D0D2D1",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      className="font-geom-semibold text-[#262626]"
                      style={{ fontSize: s(16) }}
                    >
                      Cancel
                    </Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <Pressable
                    onPress={() => setEditing(true)}
                    style={{
                      height: s(52),
                      borderRadius: s(26),
                      backgroundColor: ACCENT,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: s(10),
                    }}
                  >
                    <Text
                      className="font-geom-semibold text-white"
                      style={{ fontSize: s(16) }}
                    >
                      Edit Profile
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={signOut}
                    style={{
                      height: s(52),
                      borderRadius: s(26),
                      backgroundColor: "#FFFFFF",
                      borderWidth: 1.5,
                      borderColor: "#D0D2D1",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      className="font-geom-semibold"
                      style={{ fontSize: s(16), color: "#C0392B" }}
                    >
                      Sign Out
                    </Text>
                  </Pressable>
                </>
              )}
            </ScrollView>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
  },
});
