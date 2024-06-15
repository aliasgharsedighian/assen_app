import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useRef, useState } from "react";
import { UserIcon, Bars3Icon } from "react-native-heroicons/outline";
import tw from "twrnc";

export default function Header({ drawer }: any) {
  return (
    <View style={styles.header}>
      <View style={tw`mx-3 flex-row items-center justify-between gap-4`}>
        <Image
          source={require("@/assets/icons/call-me.png")}
          style={tw`w-6 h-6`}
        />
        <Image
          source={require("@/assets/icons/mobile-logo.png")}
          style={tw``}
        />
        <Bars3Icon
          onPress={() => drawer.current?.openDrawer()}
          size={30}
          color="#000"
          fontWeight="bold"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    paddingBottom: 2,
  },
});
