import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import tw from "twrnc";

export function Collapsible({
  children,
  title,
  defaultOpen,
}: PropsWithChildren & { title: string; defaultOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={tw`bg-transparent`}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-back-outline"}
          size={18}
          color={
            theme === "light"
              ? isOpen
                ? "#960b0b"
                : Colors.light.icon
              : isOpen
              ? "#960b0b"
              : Colors.dark.icon
          }
        />
        <Text
          style={[
            tw`flex-1 ${isOpen ? "text-[#960b0b]" : ""}`,
            styles.customFont,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 12,
    marginLeft: 24,
    backgroundColor: "transparent",
  },
  customFont: {
    fontFamily: "IranSansBold",
  },
});
