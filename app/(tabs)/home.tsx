import { Text, View, SafeAreaView, Image } from "react-native";
import tw from "twrnc";
import { UserIcon, Bars3Icon } from "react-native-heroicons/outline";

export default function tabNew() {
  return (
    <SafeAreaView style={tw`bg-[#F9F7F7] pt-5`}>
      {/* Header */}
      <View style={tw`pb-2 shadow-lg`}>
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
    </SafeAreaView>
  );
}
