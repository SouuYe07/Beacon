import { View, TextInput } from "react-native";
import useChatsLayout from "../hooks/useChatsLayout";
import SearchIcon from "../../assets/Icons/search.svg";

export default function Search({
  value,
  onChangeText,
  placeholder = "Search",
  style,
}) {
  const { styles: L } = useChatsLayout();
  return (
    <View
      style={[
        {
          width: L.contentWidth,
          alignSelf: "center",
          height: L.searchHeight,
          borderRadius: L.searchRadius,
          backgroundColor: "#FFFFFF",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: L.searchPadX,
          marginBottom: L.sectionGap,
        },
        style,
      ]}
    >
      <SearchIcon width={L.searchIcon} height={L.searchIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#5A5A5A"
        underlineColorAndroid="transparent"
        className="font-geom-regular text-[#262626]"
        style={{
          flex: 1,
          marginLeft: L.searchIconGap,
          fontSize: L.searchFont,
          lineHeight: L.searchFont * 1.2,
          paddingVertical: 0,
          includeFontPadding: false,
          textAlignVertical: "center",
        }}
      />
    </View>
  );
}
