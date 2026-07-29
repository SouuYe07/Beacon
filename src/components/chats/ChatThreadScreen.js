import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Background from "../Background";
import useChatsLayout from "../../hooks/useChatsLayout";
import ProfileIcon from "../../../assets/Icons/user-avatar.svg";
import PeerAvatar from "../../../assets/Icons/chat-peer-avatar.svg";
import BackIcon from "../../../assets/Icons/chevron-back.svg";
import PhoneIcon from "../../../assets/Icons/chat-phone.svg";
import VideoIcon from "../../../assets/Icons/chat-video.svg";
import PlusIcon from "../../../assets/Icons/chat-attach.svg";
import MicIcon from "../../../assets/Icons/chat-microphone.svg";
import SendIcon from "../../../assets/Icons/chat-send.svg";

const ACCENT = "#32759F";
const BUBBLE_FONT = 20;
const BUBBLE_HEIGHT = 45;
const TEXT_PAD_X = 18;
const PEER_AVATAR = 54.08;
const HEADER_AVATAR_W = 54.04;
const HEADER_AVATAR_H = 54.08;
const COMPOSER_ICON = 30;
const DATE_PILL_W = 110;
const DATE_PILL_H = 30;

const SEED_THREAD = [
  { id: "t1", fromMe: false, text: "Honey, did you eat lunch today?" },
  { id: "t2", fromMe: true, text: "Yes mom, I had the rice bowl." },
  { id: "t3", fromMe: false, text: "That’s good. How are you feeling?" },
  { id: "t4", fromMe: true, text: "A bit tired, but okay." },
  { id: "t5", fromMe: false, text: "Rest for a while. I’m proud of you." },
  { id: "t6", fromMe: true, text: "Thanks, Mom. Love you." },
];

function MessageBubble({ fromMe, text, s }) {
  const avatarSize = s(PEER_AVATAR);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: fromMe ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        marginBottom: s(10),
        paddingHorizontal: s(12),
      }}
    >
      {!fromMe ? (
        <View style={{ marginRight: s(8) }}>
          <PeerAvatar width={avatarSize} height={avatarSize} />
        </View>
      ) : null}

      <View
        style={{
          maxWidth: fromMe ? "78%" : "70%",
          minHeight: s(BUBBLE_HEIGHT),
          justifyContent: "center",
          paddingHorizontal: s(TEXT_PAD_X),
          paddingVertical: s(10),
          backgroundColor: fromMe
            ? "rgba(50, 117, 159, 0.7)"
            : "rgba(255, 255, 255, 0.7)",
          borderTopLeftRadius: s(15),
          borderTopRightRadius: s(15),
          borderBottomLeftRadius: fromMe ? s(15) : s(2),
          borderBottomRightRadius: fromMe ? s(2) : s(15),
        }}
      >
        <Text
          className="font-geom-light"
          style={{
            fontSize: s(BUBBLE_FONT),
            lineHeight: s(24),
            color: fromMe ? "#FFFFFF" : "#262626",
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}

export default function ChatThreadScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { insets, s, sx, styles: L } = useChatsLayout();
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(SEED_THREAD);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const scrollRef = useRef(null);

  const userName = route.params?.name ?? "User User";
  const online = route.params?.online !== false;
  const typing = keyboardHeight > 0;

  const inputWidth = s(350);
  const inputHeight = s(44);
  const actionIcon = s(34);
  const composerIcon = s(COMPOSER_ICON);
  const barRadius = s(30);
  const headerAvatarW = s(HEADER_AVATAR_W);
  const headerAvatarH = s(HEADER_AVATAR_H);

  const headerHeight = insets.top + s(88);
  const composerHeight = s(93);
  const composerPadTop = s(16);
  // Lift the typebox a bit more above the keyboard while typing
  const composerLift = typing ? s(18) : 0;

  // When the window pans with the keyboard, offset the header down by the
  // keyboard height so it stays visually pinned at the top (overlay).
  // iOS typically needs the composer moved by the full keyboard height.
  const headerTop = Platform.OS === "android" ? keyboardHeight : 0;
  const composerBottom =
    Platform.OS === "ios" ? keyboardHeight + composerLift : composerLift;

  const scrollToEnd = () => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    });
  };

  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvent, (e) => {
      setKeyboardHeight(e.endCoordinates?.height ?? 0);
      setTimeout(scrollToEnd, 50);
    });
    const hideSub = Keyboard.addListener(hideEvent, () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { id: `local-${Date.now()}`, fromMe: true, text },
    ]);
    setDraft("");
    scrollToEnd();
  };

  return (
    <View className="flex-1 relative">
      <Background />

      {/* Messages fill the screen; header/composer overlay on top */}
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1, zIndex: 1 }}
        contentContainerStyle={{
          paddingTop: headerHeight + s(14),
          paddingBottom: composerHeight + composerBottom + s(12),
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        onContentSizeChange={scrollToEnd}
      >
        <View style={{ alignItems: "center", marginBottom: s(14) }}>
          <View
            style={{
              width: s(DATE_PILL_W),
              height: s(DATE_PILL_H),
              borderRadius: s(999),
              backgroundColor: "rgba(248, 248, 248, 0.6)",
              borderWidth: 1,
              borderColor: "#E0D8D2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              className="font-geom-regular"
              style={{ fontSize: s(16), color: "#CCCBC5", lineHeight: s(20) }}
            >
              Today
            </Text>
          </View>
        </View>

        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            fromMe={msg.fromMe}
            text={msg.text}
            s={s}
          />
        ))}
      </ScrollView>

      {/* Header overlays chat and stays pinned while typing */}
      <View
        pointerEvents="box-none"
        style={{
          position: "absolute",
          top: headerTop,
          left: 0,
          right: 0,
          zIndex: 20,
          elevation: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: sx(430),
            height: headerHeight,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: barRadius,
            borderBottomRightRadius: barRadius,
            paddingTop: insets.top + s(6),
            paddingHorizontal: L.sidePad,
            paddingBottom: s(8),
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => navigation.goBack()}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Go back"
              style={{ marginRight: s(2) }}
            >
              <BackIcon width={s(40)} height={s(40)} />
            </Pressable>

            <ProfileIcon width={headerAvatarW} height={headerAvatarH} />

            <View style={{ flex: 1, marginLeft: s(10), marginRight: s(8) }}>
              <Text
                className="font-geom-medium"
                style={{
                  fontSize: s(24),
                  lineHeight: s(28),
                  color: "#262626",
                }}
                numberOfLines={1}
              >
                {userName}
              </Text>
              {online ? (
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginTop: s(4),
                    backgroundColor: ACCENT,
                    borderRadius: s(20),
                    paddingHorizontal: s(10),
                    paddingVertical: s(2),
                  }}
                >
                  <Text
                    className="font-geom-medium text-white"
                    style={{ fontSize: s(11), lineHeight: s(14) }}
                  >
                    Online
                  </Text>
                </View>
              ) : null}
            </View>

            <Pressable hitSlop={8} style={{ marginRight: s(14) }}>
              <PhoneIcon width={actionIcon} height={actionIcon} />
            </Pressable>
            <Pressable hitSlop={8}>
              <VideoIcon width={actionIcon} height={actionIcon} />
            </Pressable>
          </View>
        </View>
      </View>

      {/* Composer overlays bottom; lifts slightly while typing */}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: composerBottom,
          zIndex: 20,
          elevation: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: sx(430),
            height: composerHeight,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderTopLeftRadius: barRadius,
            borderTopRightRadius: barRadius,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            paddingTop: composerPadTop,
            paddingHorizontal: sx(20),
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: inputWidth,
              height: inputHeight,
              borderRadius: s(30),
              backgroundColor: "#F8F8F8",
              borderWidth: 1,
              borderColor: "#E0D8D2",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: s(10),
              marginRight: s(10),
            }}
          >
            <Pressable hitSlop={6} style={{ marginRight: s(4) }}>
              <PlusIcon width={composerIcon} height={composerIcon} />
            </Pressable>

            <TextInput
              value={draft}
              onChangeText={setDraft}
              placeholder="Type a message"
              placeholderTextColor="#CCCBC5"
              underlineColorAndroid="transparent"
              className="font-geom-regular"
              style={{
                flex: 1,
                fontSize: s(BUBBLE_FONT),
                lineHeight: s(24),
                color: "#262626",
                paddingVertical: 0,
                includeFontPadding: false,
              }}
              onFocus={scrollToEnd}
              onSubmitEditing={send}
              returnKeyType="send"
            />

            <Pressable hitSlop={6} style={{ marginLeft: s(4) }}>
              <MicIcon width={composerIcon} height={composerIcon} />
            </Pressable>
          </View>

          <Pressable onPress={send} accessibilityRole="button" accessibilityLabel="Send">
            <SendIcon width={s(45)} height={s(45)} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
