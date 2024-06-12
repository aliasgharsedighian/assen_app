import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { UserIcon, Bars3Icon } from "react-native-heroicons/outline";
import Categories from "@/components/Categories";

export default function tabNew() {
  return (
    <SafeAreaView style={tw`bg-[#F9F7F7] pt-5`}>
      {/* Header */}
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
          <Bars3Icon size={30} color="#000" fontWeight="bold" />
        </View>
      </View>
      {/* body */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* banner */}
        <Categories />
        {/* table */}
        {/* consultation-request */}
      </ScrollView>
    </SafeAreaView>
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
